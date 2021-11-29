const RequestsDataAccess = require("../data_requests/RequestDataAccess");
const ApiError = require("../error/ApiError");
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const ResponseCreator = require("../response_creators/ResponseCreator");
const RequestDataAccess = require("../data_requests/RequestDataAccess");
const {uploadFile} = require("../AWS/S3");

async function imageLoader(req) {
  if (!req.files) return null;
  const img = req.files.img;
  let fileName = uuid.v4() + ".jpg";
  const filePath = path.resolve(__dirname, "..", "public", "images", fileName);
  img.mv(filePath);
  const result = await uploadFile(fileName);
  console.log(result);
  await unlinkFile(filePath);
  return fileName;
}

class RequestController {

  async getAllRequests(req, res, next) {
    try {
      const { locations, categories, order, isActive, page, limit, search } =
        req.query;
      const userId = req.user ? req.user.id : null;
      return res.json(
        ResponseCreator.response(
          await RequestDataAccess.getRequests(
            locations?.split(","),
            categories?.split(","),
            order,
            isActive,
            search,
            userId,
            limit,
            page * limit
          )
        )
      );
    } catch (error) {
      return next(error);
    }
  }

  async getByIdRequests(req, res, next) {
    const id = req.param("id").slice(1);
    try {
      const request = await RequestsDataAccess.findRequestById(id);
      return res.json(
        ResponseCreator.response({ message: "Request found", request })
      );
    } catch (error) {
      return next(error);
    }
  }

  async newRequest(req, res, next) {
    const {
      name,
      description,
      address,
      startDate,
      endDate,
      categoryId,
      locationId,
    } = req.body;
    const fileName = await imageLoader(req);
    try {
      const request = await RequestsDataAccess.createRequest(
        name,
        description,
        address,
        startDate,
        endDate,
        categoryId,
        locationId,
        req.user.id,
        fileName
      );
      return res.json(
        ResponseCreator.response({
          message: "Request created",
          request,
        })
      );
    } catch (error) {
      return next(error);
    }
  }

  async updateRequest(req, res, next) {
    const {
      name,
      description,
      address,
      startDate,
      endDate,
      categoryId,
      locationId,
    } = req.body;

    const id = req.param('id').slice(1);
    try{
      const request = await RequestsDataAccess.findRequestById(id);
      if (req.user.id !== request.UserId) {
        throw ApiError.forbidden();
      }
      if (request.picture) {
        fs.unlinkSync(path.resolve(__dirname, "..", "public", "images", request.picture));
      }

      const fileName = imageLoader(req);

      request.name = name;
      request.description = description;
      request.address = address;
      request.startDate = startDate;
      request.endDate = endDate;
      request.categoryId = categoryId;
      request.locationId = locationId;
      request.picture = fileName;
      request.save();

      return res.json(ResponseCreator.response({
            message: "Request updated",
            request
          })
      );
    } catch(error) {
      return next(error);
    }
  }

  async archive(req, res, next) {
    try {
      const id = req.param("id").slice(1);
      const request = await RequestsDataAccess.findRequestById(id);
      if (req.user.id !== request.UserId) {
        throw ApiError.unauthorized('Request does not belongs to user');
      }
      request.active = !request.active;
      request.save();
      return res.json(
        ResponseCreator.response({ message: "Status changed", request })
      );
    } catch (error) {
      return next(error);
    };
  }
}

module.exports = new RequestController();
