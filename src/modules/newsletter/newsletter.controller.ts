import { Request, Response } from "express";
import { Mail } from "../../lib/mail";
import { mailConfig } from "../../config/mail";

export class NewsletterController {
  constructor() {}

  async subscribe(req: Request, res: Response) {
    const { email, name } = req.body;

    // send email and save to database
    await Mail.sendMail({
      from: "Test <newsletter@teste.com>",
      to: `${name} <${email}>`,
      subject: "Welcome to our newsletter!",
      html: "<p>You have successfully subscribed to our newsletter!</p>",
    });

    return res.status(200).json({
      message: `User ${name} subscribed with email ${email}`,
    });
  }
}
