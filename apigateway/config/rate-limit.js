// rate-limit.js
// Rate limiting rules for gateway

import rateLimit from "express-rate-limit";

export default rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window per IP
  message: "Too many requests, please try again later.",
});
