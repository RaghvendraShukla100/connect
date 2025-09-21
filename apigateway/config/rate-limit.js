import rateLimit from "express-rate-limit";
import { env } from "./env.js";

export const rateLimiter = rateLimit({
  windowMs: env.rateLimit.windowMs,
  max: env.rateLimit.max,
  standardHeaders: true,
  legacyHeaders: false,
  message: "Too many requests, please try again later.",
});
