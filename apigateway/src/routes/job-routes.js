import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { env } from "../../config/env.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();

// Protect job routes → require JWT
router.use(
  "/jobs",
  authMiddleware,
  createProxyMiddleware({
    target: env.services.job,
    changeOrigin: true,
    pathRewrite: { "^/jobs": "" },
  })
);

export default router;
