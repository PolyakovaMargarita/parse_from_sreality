// import Router from "express"
// const router = Router()
// const scrapeRouter = require("./scrapeRouter")

// router.use("/", scrapeRouter)

// module.exports = router


// Импортируем необходимые зависимости
// const express = require('express');
import express, { Request, Response } from 'express';
import scrapeController from "../controllers/scrapeController"
const router = express.Router();

// Определяем обработчик для GET-запроса на корневой URL ("/")
// router.post('/', scrapeController.create);
router.get('/', scrapeController.getAll);

// Экспортируем созданный роут
module.exports = router;
