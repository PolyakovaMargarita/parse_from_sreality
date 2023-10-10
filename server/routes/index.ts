import express, { Request, Response } from 'express';
import scrapeController from "../controllers/scrapeController"
const router = express.Router();

router.get('/', scrapeController.getAll);

module.exports = router;
