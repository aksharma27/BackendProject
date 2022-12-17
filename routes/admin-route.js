const express = require('express');
const router = express.Router();
const adminController = require("../controllers/admin");
const category = adminController.category;
const post = adminController.post;


router.get('/add-category/:categoryName', category);

router.post("/add-image", post);

module.exports = router;