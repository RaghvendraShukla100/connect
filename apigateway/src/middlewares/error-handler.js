// src/middlewares/error-handler.js
import { logger } from "../../config/logger.js";

/**
 * Centralized error-handling middleware
 * Logs errors via Winston and sends standardized JSON response
 */
export const errorHandler = (err, req, res, next) => {
  const method = req.method || "UNKNOWN_METHOD";
  const url = req.originalUrl || "UNKNOWN_URL";

  // Log full error stack
  logger.error(`[${method}] ${url} - ${err.message}`, {
    stack: err.stack,
  });

  const statusCode = err.status || 500;

  res.status(statusCode).json({
    status: "error",
    message: err.message || "Internal Server Error",
    // Optional: only in development
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
};
