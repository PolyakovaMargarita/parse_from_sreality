// const Router = require("express")
// const router = new Router()
// const scrapeController = require("../controllers/scrapeController")

// router.post("/", scrapeController.create)
// router.get("/", scrapeController.getAll)

// module.exports = router

// scrapeRouter.js

const express = require('express');
const router = express.Router();
const scrapeController = require('../controllers/scrapeController');

// Установите обработчики для маршрута POST и GET
router.post('/', scrapeController.create);
router.get('/', scrapeController.getAll);

module.exports = router;

