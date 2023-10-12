import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import ScrappedModel from '../models/ScrappedModel';

const prisma = new PrismaClient();
const scrappedModel = new ScrappedModel();

class ScrapperController {
    async getWithPagination(req: Request, res: Response): Promise<Response> {
        try {
            const { page, per_page} = req.query;
            const parsedPage = parseInt(page as string) || 1;
            const parsedPerPage = parseInt(per_page as string) || 10;

            const scrappedData = await scrappedModel.findAllWithPagination(parsedPage, parsedPerPage)
            
            // await prisma.scrapped.findMany({
            //     skip: (parsedPage - 1) * parsedPerPage,
            //     take: parsedPerPage,
            // });

            // const total = await prisma.scrapped.count();

            return res.json(scrappedData);
        } catch (e) {
            return res.status(500).json({ error: 'Failed to fetch Scrapped entries' });
        }
    }
}

export default ScrapperController;
