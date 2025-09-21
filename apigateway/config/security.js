import helmet from "helmet";
import { corsMiddleware } from "./cors.js";

export const securityMiddleware = (app) => {
  app.use(helmet());
  app.use(corsMiddleware);
};
