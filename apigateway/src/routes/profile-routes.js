import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { env } from "../../config/env.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const router = express.Router();

// Forward profile routes → profile-service
router.use(
  "/profiles",
  authMiddleware,
  createProxyMiddleware({
    target: env.services.profile,
    changeOrigin: true,
    pathRewrite: { "^/profiles": "" },
  })
);

export default router;
