// src/middlewares/validate-request.js
import { ValidationError } from "joi";

/**
 * Middleware factory for request validation
 * @param {Joi.Schema} schema - Joi schema object
 * @param {"body" | "query" | "params"} [property="body"] - Request property to validate
 */
export const validateRequest = (schema, property = "body") => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[property], {
      abortEarly: false, // Return all errors, not just first
      allowUnknown: false, // Disallow unknown keys
      stripUnknown: true, // Remove unknown keys from the object
    });

    if (error) {
      return res.status(400).json({
        status: "error",
        message: "Validation failed",
        details: error.details.map((d) => d.message),
      });
    }

    // ✅ Update request safely
    if (property === "query") {
      // Merge sanitized query instead of overwriting
      Object.assign(req.query, value);
    } else {
      req[property] = value;
    }

    next();
  };
};
