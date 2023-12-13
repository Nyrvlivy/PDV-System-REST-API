const s3 = require('../configs/upload/s3');

const deleteProductImage = async (path) => {
    const file = await s3.deleteObject({
        Bucket: process.env.KEY_NAME,
        Key: path
    }).promise();

    return `https://${file.Bucket}.${process.env.ENDPOINT_S3}/${file.Key}`
}
module.exports = deleteProductImage;