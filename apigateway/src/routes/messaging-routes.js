import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { env } from "../../config/env.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();

// Forward messaging routes → messaging-service
router.use(
  "/messages",
  authMiddleware,
  createProxyMiddleware({
    target: env.services.messaging,
    changeOrigin: true,
    pathRewrite: { "^/messages": "" },
  })
);

export default router;
