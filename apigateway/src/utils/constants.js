// utils/constants.js

// Common user roles
const ROLES = {
  USER: "user",
  EMPLOYER: "employer",
  ADMIN: "admin",
};

// Common error codes
const ERROR_CODES = {
  VALIDATION_ERROR: "VALIDATION_ERROR",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  NOT_FOUND: "NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
};

// Microservice URLs (from env)
const SERVICES = {
  identity: process.env.IDENTITY_SERVICE_URL,
  user: process.env.USER_SERVICE_URL,
  job: process.env.JOB_SERVICE_URL,
  application: process.env.APPLICATION_SERVICE_URL,
  messaging: process.env.MESSAGING_SERVICE_URL,
  notification: process.env.NOTIFICATION_SERVICE_URL,
};

module.exports = { ROLES, ERROR_CODES, SERVICES };
