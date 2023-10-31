const { Router } = require('express');
const { postImage } = require('../Controller/imageController/postImage');
const { getImages } = require('../Controller/imageController/getImages');

const route =  Router();

route.post('/create/image', postImage);
route.get('/get/images', getImages);


module.exports = route