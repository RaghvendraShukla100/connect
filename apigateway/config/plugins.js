import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import { logger } from "./logger.js";

export const applyPlugins = (app) => {
  app.use(helmet()); // Security headers
  app.use(compression()); // Gzip compression
  app.use(
    morgan("dev", { stream: { write: (msg) => logger.info(msg.trim()) } })
  );
};
