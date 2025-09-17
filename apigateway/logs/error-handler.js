// error-handler.js
// Centralized error logging for gateway

import logger from "./logger.js";

export default function errorHandler(err, req, res, next) {
  logger.error(`${err.message} - ${req.method} ${req.originalUrl} - ${req.ip}`);

  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
}
