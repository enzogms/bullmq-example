import IORedis from "ioredis";

export const defaultConnection = new IORedis({ maxRetriesPerRequest: null });
