import express, {Express} from "express";
import {Server} from "../src/server";

const app: Express = express();

Server.start(app);