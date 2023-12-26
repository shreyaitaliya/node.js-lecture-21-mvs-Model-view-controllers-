const express = require('express');

const routes = express.Router();

routes.use('/user', require('./userRoutes'));

module.exports = routes;