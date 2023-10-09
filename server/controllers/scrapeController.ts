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
      const extractedDataList = await ExtractedData.findAll();
      console.log("data", extractedDataList)
      return res.json(extractedDataList);
    } catch (error) {
      console.error('Get All ExtractedData error:', error);
    }
  }
}

export default new scrapeController;
