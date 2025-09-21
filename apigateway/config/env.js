import dotenv from "dotenv";
import Joi from "joi";

dotenv.config();

// Define schema for environment validation
const envSchema = Joi.object({
  PORT: Joi.number().default(8080),
  NODE_ENV: Joi.string()
    .valid("development", "production", "test")
    .default("development"),

  JWT_SECRET: Joi.string().required(),
  JWT_ISSUER: Joi.string().default("job-platform"),
  JWT_AUDIENCE: Joi.string().default("job-platform-users"),
  JWT_EXPIRES_IN: Joi.string().default("1h"),

  CORS_ORIGIN: Joi.string().default("http://localhost:3000"),

  RATE_LIMIT_WINDOW_MS: Joi.number().default(60000),
  RATE_LIMIT_MAX: Joi.number().default(100),

  AUTH_SERVICE_URL: Joi.string().uri().default("http://localhost:4000"),
  JOB_SERVICE_URL: Joi.string().uri().default("http://localhost:4001"),
  PROFILE_SERVICE_URL: Joi.string().uri().default("http://localhost:4002"),
  MESSAGING_SERVICE_URL: Joi.string().uri().default("http://localhost:4003"),
  NOTIFICATION_SERVICE_URL: Joi.string().uri().default("http://localhost:4004"),
  PAYMENT_SERVICE_URL: Joi.string().uri().default("http://localhost:4005"),
}).unknown();

const { value: envVars, error } = envSchema.validate(process.env);

if (error) {
  throw new Error(`❌ Config validation error: ${error.message}`);
}

export const env = {
  port: envVars.PORT,
  nodeEnv: envVars.NODE_ENV,

  jwt: {
    secret: envVars.JWT_SECRET,
    issuer: envVars.JWT_ISSUER,
    audience: envVars.JWT_AUDIENCE,
    expiresIn: envVars.JWT_EXPIRES_IN,
  },

  cors: {
    origin: envVars.CORS_ORIGIN,
  },

  rateLimit: {
    windowMs: envVars.RATE_LIMIT_WINDOW_MS,
    max: envVars.RATE_LIMIT_MAX,
  },

  services: {
    auth: envVars.AUTH_SERVICE_URL,
    job: envVars.JOB_SERVICE_URL,
    profile: envVars.PROFILE_SERVICE_URL,
    messaging: envVars.MESSAGING_SERVICE_URL,
    notification: envVars.NOTIFICATION_SERVICE_URL,
    payment: envVars.PAYMENT_SERVICE_URL,
  },
};
