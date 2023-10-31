const mongoose = require("mongoose");

const imagenSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
});
const Image = mongoose.model("Image", imagenSchema);

module.exports = Image;
