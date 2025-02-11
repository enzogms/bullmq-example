import { Request, Response } from "express";

export class NewsletterController {
  constructor() {}

  subscribe(req: Request, res: Response) {
    const { email, name } = req.body;

    // send email and save to database

    return res.status(200).json({
      message: `User ${name} subscribed with email ${email}`,
    });
  }
}
