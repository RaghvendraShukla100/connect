import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { env } from "../../config/env.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();

// Forward notifications → notification-service
router.use(
  "/notifications",
  authMiddleware,
  createProxyMiddleware({
    target: env.services.notification,
    changeOrigin: true,
    pathRewrite: { "^/notifications": "" },
  })
);

export default router;
