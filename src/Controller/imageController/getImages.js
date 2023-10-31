const Image = require("../../model/Image.js");

const getImages = async (req, res, next) => {
  try {
    const images = await Image.find()
    res.status(200).json(images)
  } catch (error) {
    next(error)
}
}
module.exports = {
  getImages
};