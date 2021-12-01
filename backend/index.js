require("dotenv").config();
const express = require("express");
const path = require('path');
const router = require("./routes/router");
const sequelize = require("./db");
const app = express();
const errorHandler = require("./middlewares/ErrorHandlerMiddleware");
const fileUpload = require('express-fileupload');
const { getFileStream } = require("./AWS/S3");
var cors = require('cors')

app.use(express.json());
app.use(fileUpload({}));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

router.get('/images/:id',(req, res) => {
  const key = req.params.id;
  const readStream = getFileStream(key);
  readStream.pipe(res);
})

app.use("/", router);
app.use(errorHandler);
console.log(process.env);
const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync()
    // If the model has changed, use the sequelize.sync ({alter: true}) method with this parameter
    // await sequelize.sync({alter: true});
    app.listen(PORT, () => {
      console.log("server has started on port 5000");
    });
  } catch (err) {
    throw err;
  }
};
start();
