// /gateway/src/middleware/check-auth.js
import jwt from "jsonwebtoken";
import logger from "../../../shared/utils/logger.js";

export const checkAuth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    logger.warn("Unauthorized access attempt");
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    // ✅ Verify token using secret (keep in .env)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    logger.error("Invalid token");
    return res.status(403).json({ message: "Invalid token" });
  }
};
