const s3 = require('../configs/upload/s3');

const deleteProductImage = async (path) => {
    await s3.deleteObject({
        Bucket: process.env.KEY_NAME,
        Key: path
    }).promise();
}
module.exports = deleteProductImage;