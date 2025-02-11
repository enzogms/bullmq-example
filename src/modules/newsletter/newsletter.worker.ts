import { Worker } from "bullmq";
import { defaultConnection } from "../../lib/bullMq/constants/defaultConnection";
import { jobs } from "./newsletter.job";

type JobName = keyof typeof jobs;

export const newsletterWorker = new Worker(
  "Newsletter",
  async (job) => {
    const { handle } = jobs[job.name as JobName];
    console.log(`Processing job of type ${job.name}`);
    await handle({ data: job.data });
    console.log(`Job completed`);
  },
  { connection: defaultConnection, autorun: false }
);
