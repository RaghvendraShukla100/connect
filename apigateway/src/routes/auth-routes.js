import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { env } from "../../config/env.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();

// Forward auth-related routes → identity-service
router.use(
  "/auth",
  createProxyMiddleware({
    target: env.services.auth,
    changeOrigin: true,
    pathRewrite: { "^/auth": "" },
  })
);

export default router;
