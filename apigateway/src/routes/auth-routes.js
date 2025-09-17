// src/routes/auth-routes.js
import { Router } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";
dotenv.config();

const router = Router();

// Proxy all /api/auth/* requests to Identity service
router.use(
  "/",
  createProxyMiddleware({
    target: process.env.AUTH_SERVICE_URL, // http://localhost:4000
    changeOrigin: true,
    pathRewrite: {
      "^/": "/", // keep the same path
    },
  })
);

export default router;
