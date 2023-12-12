const s3 = require("../configs/upload/s3");

const uploadProductImage = async (path, buffer, mimetype) => {
    const file = await s3
        .upload({
            Bucket: process.env.KEY_NAME,
            Key: path,
            Body: buffer,
            ContentType: mimetype,
        })
        .promise();

    return `https://${file.Bucket}.${process.env.ENDPOINT_S3}/${file.Key}`;
};
module.exports = uploadProductImage;
