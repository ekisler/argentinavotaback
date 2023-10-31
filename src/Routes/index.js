const { Router } = require('express');
const imageRoute = require('./imageRoute.js');

const route = new Router();
route.use('/api', imageRoute)


module.exports = route;