import { Request, Response } from "express";
import RegistrationNewsletter from "../../lib/bullMq/jobs/RegistrationNewsletter";
import IORedis from "ioredis";
import { Queue, Worker } from "bullmq";
import { defaultJobOptions } from "../../lib/bullMq/constants/defaultJobOptions";

export class NewsletterController {
  constructor() {}

  async subscribe(req: Request, res: Response) {
    const { email, name } = req.body;
    const { key, handle } = RegistrationNewsletter;

    const connection = new IORedis({ maxRetriesPerRequest: null });
    const queue = new Queue("Newsletter", { connection, defaultJobOptions });
    const job = await queue.add(key, { email, name });

    const worker = new Worker(
      "Newsletter",
      async (job) => {
        console.log(`Processing job of type ${key}`);
        await handle({ data: job.data });
        console.log(`Job completed`);
      },
      { connection, autorun: false }
    );

    worker.run();

    return res.status(200).json({
      message: `User ${name} subscribed with email ${email}`,
      job,
    });
  }
}
