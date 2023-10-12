import { Router } from 'express';
import ScrapperController from '../controllers/ScrapperController';

const scrapperController = new ScrapperController();
const router = Router();

router.get('/', scrapperController.getWithPagination);

export default router;
