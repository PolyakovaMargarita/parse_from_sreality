require('dotenv').config()
import express, { Express, Request, Response } from 'express';
import scrapeController from "./controllers/scrapeController"
import { ExtractedData, initExtractedData } from './models/models';
import { Sequelize } from 'sequelize';


// const sequelize = require("./db")
const cors = require("cors")
const router = require("./routes/index")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")
const path = require("path")
// const scrapeController = new ScrapeController();

import scrapeSReality from './src/scrape';

interface RequestBody {
  image_src: string;
  title: string;
}


const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'postgres-test-db',
  database: 'database',
  username: 'user',
  password: 'password',
});

initExtractedData(sequelize);

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

const PORT = process.env.PORT || 3001;

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);
// app.use(errorHandler);

async function main() {
  try {
    const data = await scrapeSReality();
    for (const item of data) {
      const { image_src, title } = item as RequestBody;

      const newData = {
        image_src,
        title,
      };
      console.log("newData", newData)

      try {
        const createdData = await ExtractedData.create(newData);
        console.log('Запись успешно добавлена:', createdData.toJSON());

      } catch (error) {
        console.error('Error saving data:', error);
      }
    }
  } catch (error) {
    console.error('Error scraping data:', error);
  }
}

app.get("/", (req, res) => {
  res.status(200).json({message: "Working!!!"})
})

const start = async () => {
  try {
    authenticate();
    main();

    try {
      const extractedDataList = await ExtractedData.findAll();
      console.log("data", extractedDataList);
    } catch (error) {
      console.error('Get All ExtractedData error:', error);
    }

    app.listen(PORT, () => console.log(`Server is starting on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();