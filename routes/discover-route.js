const express = require('express');
const discoverRoute = express.Router();
const discoverController = require('../controllers/discover');
const like = discoverController.like;
const shuffle = discoverController.shuffle;

const CategoryModel = require('../models/category-model');
const GalleryModel = require('../models/gallery-model');

discoverRoute.get('/like/:imageId', like);

discoverRoute.get('/discover/:category/:shuffle', shuffle);

module.exports = discoverRoute;