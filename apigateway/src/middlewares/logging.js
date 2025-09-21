// src/middlewares/logging.js
import morgan from "morgan";
import { logger } from "../../config/logger.js";

/**
 * Morgan middleware integrated with Winston
 * Logs HTTP requests via Winston with appropriate log level
 */

// Stream: sends Morgan logs to Winston
const stream = {
  write: (message) => {
    logger.http(message.trim()); // Use 'http' level for request logs
  },
};

// Skip logging in test environment
const skip = () => process.env.NODE_ENV === "test";

// Format: method, URL, status, response time
export const loggingMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream, skip }
);
