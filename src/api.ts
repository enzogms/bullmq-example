import "dotenv/config";
import express from "express";
import newsletterRouter from "./modules/newsletter/newsletter.router";

const api = express();
api.use(express.json());

api.use("/newsletter", newsletterRouter);

api.listen(3333, () => {
  console.log("Server is running on http://localhost:3333");
});
