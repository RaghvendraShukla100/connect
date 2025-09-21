// /gateway/src/middlewares/check-auth.js
import jwt from "jsonwebtoken";
import logger from "../../../shared/utils/logger.js";

/**
 * Middleware to verify JWT token
 * Attaches decoded user info to req.user
 */
export const checkAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1]; // Optional chaining

  if (!token) {
    logger.warn("Unauthorized access attempt");
    return res.status(401).json({
      status: "error",
      message: "Access denied. No token provided.",
    });
  }

  try {
    // Verify token using secret (from .env)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    logger.error("Invalid token", { stack: err.stack });
    return res.status(403).json({
      status: "error",
      message: "Invalid token",
    });
  }
};
