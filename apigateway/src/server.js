// src/server.js
import http from "http";
import app from "./app.js";
import { logger } from "../config/logger.js";

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`🚀 API Gateway running on port ${PORT}`);
});

// Graceful shutdown
const shutdown = () => {
  logger.info("Shutting down API Gateway...");
  server.close(() => {
    logger.info("Server closed. Exiting process.");
    process.exit(0);
  });

  // Force exit after 5 seconds
  setTimeout(() => {
    logger.error("Force shutdown after 5s timeout");
    process.exit(1);
  }, 5000);
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

export default server;
