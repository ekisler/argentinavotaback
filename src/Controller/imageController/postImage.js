const cloudinary = require("cloudinary").v2;
const Image = require("../../model/Image.js");
const cloudinaryConfig = require("../../../Utils/cloudinary.js");
require("dotenv").config();

cloudinaryConfig(
  process.env.CLOUDINARY_NAME,
  process.env.CLOUDINARY_API_KEY,
  process.env.CLOUDINARY_API_SECRET
);

const postImage = async (req, res, next) => {
  const { imgUrl, name, tableNumber, schoolName } = req.body;

  try {
    const result = await cloudinary.uploader.upload(imgUrl, {
      folder: "Prendas",
    });
    const image = new Image({
      imgUrl: result.secure_url,
      name,
      tableNumber,
      schoolName,
    });
    await image.save();

    res.status(201).json({ image });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postImage,
};
