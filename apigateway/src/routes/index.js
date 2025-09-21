import express from "express";

// Import route modules
import authRoutes from "./auth-routes.js";
import jobRoutes from "./job-routes.js";
import profileRoutes from "./profile-routes.js";
import messagingRoutes from "./messaging-routes.js";
import notificationRoutes from "./notification-routes.js";
import paymentRoutes from "./payment-routes.js";

const router = express.Router();

// Mount all route groups
router.use(authRoutes);
router.use(jobRoutes);
router.use(profileRoutes);
router.use(messagingRoutes);
router.use(notificationRoutes);
router.use(paymentRoutes);

export default router;
