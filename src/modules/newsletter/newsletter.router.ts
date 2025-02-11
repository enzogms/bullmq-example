import { Router, Request, Response } from "express";
import { NewsletterController } from "./newsletter.controller";

const newsletterRouter = Router();
const newsletterController = new NewsletterController();

newsletterRouter.post("/subscribe", async (req: Request, res: Response) => {
  await newsletterController.subscribe(req, res);
});

export default newsletterRouter;
