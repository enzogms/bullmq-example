import { DefaultJobOptions } from "bullmq";

export const defaultJobOptions: DefaultJobOptions = {
  removeOnComplete: true,
  removeOnFail: {
    count: 1000,
  },
  attempts: 0,
};
