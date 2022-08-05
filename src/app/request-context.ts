import { Request, Response } from "express";
import { RedisClientType } from "redis";

export type RequestContext = {
  req: Request;
  res: Response;
  redis: RedisClientType;
};
