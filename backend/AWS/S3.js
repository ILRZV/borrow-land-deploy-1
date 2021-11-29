require('dotenv').config();
const S3 = require('aws-sdk/clients/s3');
const fs = require("fs");
const path = require('path');

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
});

function uploadFile(fileName) {
    const fileStream = fs.createReadStream(path.resolve(__dirname, "..", "public", "images", fileName));

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: fileName
    }

    return s3.upload(uploadParams).promise();
}

function getFileStream(fileName) {
    const downloadParams = {
        Key: fileName,
        Bucket: bucketName,
    }

    return s3.getObject(downloadParams).createReadStream()
}

exports.uploadFile = uploadFile;
exports.getFileStream = getFileStream;