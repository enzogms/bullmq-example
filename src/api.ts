import "dotenv/config";
import express from "express";
import newsletterRouter from "./modules/newsletter/newsletter.router";
import { newsletterWorker } from "./modules/newsletter/newsletter.worker";

const api = express();
api.use(express.json());

api.use("/newsletter", newsletterRouter);
newsletterWorker.run();

api.listen(3333, () => {
  console.log("Server is running on http://localhost:3333");
});
