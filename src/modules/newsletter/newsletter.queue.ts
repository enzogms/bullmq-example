import { Queue } from "bullmq";
import { defaultConnection } from "../../lib/bullMq/constants/defaultConnection";
import { defaultJobOptions } from "../../lib/bullMq/constants/defaultJobOptions";

export const queue = new Queue("Newsletter", {
  connection: defaultConnection,
  defaultJobOptions,
});
