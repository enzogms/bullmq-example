import { Request, Response } from "express";
import { Mail } from "../../lib/mail";
import { mailConfig } from "../../config/mail";
import IORedis from "ioredis";
import { Queue } from "bullmq";
import { defaultJobOptions } from "../../lib/bullMq/constants/defaultJobOptions";

export class NewsletterController {
  constructor() {}

  async subscribe(req: Request, res: Response) {
    const { email, name } = req.body;

    // send email and save to database
    const connection = new IORedis();
    const queue = new Queue("Newsletter", { connection, defaultJobOptions });
    const job = await queue.add("RegistrationNewsletter", { email, name });

    return res.status(200).json({
      message: `User ${name} subscribed with email ${email}`,
      job,
    });
  }
}
