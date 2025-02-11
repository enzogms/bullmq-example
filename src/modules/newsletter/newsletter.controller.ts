import { Request, Response } from "express";
import { queue } from "./newsletter.queue";

export class NewsletterController {
  constructor() {}

  async subscribe(req: Request, res: Response) {
    const { email, name } = req.body;

    const job = await queue.add("RegistrationNewsletter", { email, name });

    return res.status(200).json({
      message: `User ${name} subscribed with email ${email}`,
      job,
    });
  }
}
