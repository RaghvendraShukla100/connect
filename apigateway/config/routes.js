import { env } from "./env.js";

export const serviceRoutes = {
  "/auth": env.services.auth,
  "/jobs": env.services.job,
  "/profiles": env.services.profile,
  "/messages": env.services.messaging,
  "/notifications": env.services.notification,
  "/payments": env.services.payment,
};
