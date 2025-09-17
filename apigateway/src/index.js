// index.js
import express from "express";
import configCors from "../config/cors.js";
import applyPlugins from "../config/plugins.js";
import rateLimit from "../config/rate-limit.js";

// Import routes
import authRoutes from "./routes/auth-routes.js";
import jobRoutes from "./routes/job-routes.js";
import userRoutes from "./routes/user-routes.js";

// Import middlewares
import errorHandler from "../logs/error-handler.js";

const app = express();

// Apply middlewares
app.use(express.json());
app.use(configCors);
applyPlugins(app);
app.use(rateLimit);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/users", userRoutes);

// Health check
app.get("/health", (req, res) => res.json({ status: "UP" }));

// Error handler (last middleware)
app.use(errorHandler);

export default app;
