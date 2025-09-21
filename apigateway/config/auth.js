import jwt from "jsonwebtoken";
import { env } from "./env.js";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, env.jwt.secret, {
      issuer: env.jwt.issuer,
      audience: env.jwt.audience,
    });
    req.user = decoded; // Attach decoded token payload
    next();
  } catch (err) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};
