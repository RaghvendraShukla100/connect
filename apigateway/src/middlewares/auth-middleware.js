// src/middlewares/auth.js
import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
import { logger } from "../../config/logger.js";

/**
 * JWT authentication middleware
 * Verifies token, issuer, and audience
 * Attaches decoded payload to req.user
 */
export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers?.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    logger.warn("Unauthorized access attempt - No token provided");
    return res.status(401).json({
      status: "error",
      message: "Unauthorized. No token provided.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, env.jwtSecret, {
      issuer: env.jwtIssuer,
      audience: env.jwtAudience,
    });

    req.user = payload; // Attach user info
    next();
  } catch (err) {
    logger.error("Forbidden access - Invalid token", { stack: err.stack });
    return res.status(403).json({
      status: "error",
      message: "Forbidden. Invalid token.",
    });
  }
};
