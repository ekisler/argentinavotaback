const mongoose = require("mongoose");

const imagenSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  }, 
  tableNumber: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: false,
  }
});
const Image = mongoose.model("Image", imagenSchema);

module.exports = Image;
