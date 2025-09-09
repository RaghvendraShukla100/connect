import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import { createProxyMiddleware } from "http-proxy-middleware";
import rateLimit from "express-rate-limit";

import routes from "../config/routes.js";
import plugins from "../config/plugins.js";
import corsConfig from "../config/cors.js";
import rateLimitConfig from "../config/rate-limit.js";
import authConfig from "../config/auth.js";

import validateRequest from "./middleware/validate-request.js";
import errorHandler from "./middleware/error-handler.js";
import security from "./middleware/security.js";

const app = express();
app.use(express.json());
app.use(morgan("combined"));
app.use(helmet());

// Security (CORS, Helmet, etc.)
security(app, corsConfig);

// Rate limiting
if (plugins.rateLimit) {
  app.use(rateLimit(rateLimitConfig));
}

// Proxy setup
routes.forEach(({ path, target, stripPrefix }) => {
  const proxy = createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: stripPrefix ? { [`^${path}`]: "" } : undefined,
    onProxyReq: (proxyReq, req) => {
      const authHeader = req.headers["authorization"];
      if (authHeader) proxyReq.setHeader("authorization", authHeader);
    },
    proxyTimeout: 10000,
  });

  app.use(path, proxy);
});

// Health check
app.get("/healthz", (req, res) => res.json({ status: "ok", ts: Date.now() }));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));

export default app;
