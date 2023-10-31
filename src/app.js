const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const { connectDB }= require('./db');
const routes = require('./Routes/index');

connectDB();

const app = express();
app.name = 'voting'
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/', routes);
app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});


module.exports = app