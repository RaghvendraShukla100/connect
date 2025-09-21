// src/app.js
import "../config/env.js";

import express from "express";
import morgan from "morgan";
import { rateLimiter } from "../config/rate-limit.js";
import { errorHandler } from "./middlewares/error-handler.js";
import { loggingMiddleware } from "./middlewares/logging.js";
import routes from "./routes/index.js";
import { logger } from "../config/logger.js";

import helmet from "helmet";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import { corsOptions } from "../config/cors.js";

const app = express();

// Core middleware
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(loggingMiddleware);

// Security middleware
app.use(helmet());
app.use(cors(corsOptions));

// Manual mongo-sanitize for body & params only
app.use((req, res, next) => {
  if (req.body) mongoSanitize.sanitize(req.body, { replaceWith: "_" });
  if (req.params) mongoSanitize.sanitize(req.params, { replaceWith: "_" });
  // Skip req.query entirely to avoid Node 22+ getter error
  next();
});

// Rate limiting
app.use(rateLimiter);

// Routes
app.use("/api", routes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

// Error handling
app.use(errorHandler);

// Graceful shutdown
process.on("uncaughtException", (err) => {
  logger.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  logger.error("Unhandled Rejection:", reason);
  process.exit(1);
});

export default app;
