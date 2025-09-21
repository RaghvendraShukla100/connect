// src/middlewares/security.js
import helmet from "helmet";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import { corsOptions } from "../../config/cors.js";

export const securityMiddleware = [
  helmet(), // Security headers
  cors(corsOptions), // Enable CORS
  (req, res, next) => {
    // Only sanitize body and params; skip query to avoid Node 22+ error
    if (req.body) mongoSanitize.sanitize(req.body, { replaceWith: "_" });
    if (req.params) mongoSanitize.sanitize(req.params, { replaceWith: "_" });
    next();
  },
];
