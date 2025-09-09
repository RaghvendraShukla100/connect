import Joi from "joi";

const validateRequest = (schema) => (req, res, next) => {
  if (!schema) return next();
  const { error } = schema.validate(
    { params: req.params, query: req.query, body: req.body },
    { abortEarly: false, allowUnknown: true }
  );

  if (error) {
    return res.status(400).json({
      message: "Validation error",
      details: error.details.map((d) => d.message),
    });
  }

  return next();
};

export default validateRequest;
