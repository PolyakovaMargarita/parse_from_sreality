import dotenv from 'dotenv';
import express, {Express} from "express";
import api_v1 from "./routes/api_v1"
import cors from "cors"

export class Server {

    static start(app: Express) {

        dotenv.config({
            path: '.env'
        });

        app.use(express.json());
        app.use(cors());

        app.use('/api_v1/', api_v1);

        const server = new Server();

        ((port = process.env.APP_PORT || 3001) => {
            app.listen(port, () => console.log(`> Listening on port ${port}`));
        })();
    }
}