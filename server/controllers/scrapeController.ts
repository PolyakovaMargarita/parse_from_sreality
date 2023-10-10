import { ExtractedData } from '../models/models';
import * as express from 'express';


interface RequestBody {
    image_src: string;
    title: string;
  }

class scrapeController {
  async create(req: express.Request, res: express.Response) {
    try {
        const requestBody = req.body as unknown;
        const { image_src, title } = requestBody as RequestBody;
        const extractedData = await ExtractedData.create({ image_src, title });
        return res.json(extractedData);
    } catch (error) {
      console.error('Create ExtractedData error:', error);
    }
  }

  async getAll(req: express.Request, res: express.Response) {
    try {
      const page: number = Number(req.query.page) || 1;
      const itemsPerPage: number = 10;
      const offset: number = (page - 1) * itemsPerPage;

      const result = await ExtractedData.findAndCountAll({
        offset,
        limit: itemsPerPage,
      });
  
      const { count, rows } = result;

      res.json({
        totalItems: count,
        currentPage: page,
        itemsPerPage,
        lastPage: Math.ceil(count / itemsPerPage),
        data: rows,
      });
    } catch (error) {
      console.error('Get All ExtractedData error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new scrapeController;
