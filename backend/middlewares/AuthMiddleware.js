const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    const head = req.headers.authorization.split(" ")[0];
    if (!token || head !== "Bearer") {
      next(ApiError.unauthorized("Unauthorized"));
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    next(ApiError.unauthorized("Unauthorized"));
  }
};
