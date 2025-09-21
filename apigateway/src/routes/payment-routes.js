import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { env } from "../../config/env.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();

// Forward payment routes → payment-service
router.use(
  "/payments",
  authMiddleware,
  createProxyMiddleware({
    target: env.services.payment,
    changeOrigin: true,
    pathRewrite: { "^/payments": "" },
  })
);

export default router;
