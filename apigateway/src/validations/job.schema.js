import Joi from "joi";

// Job Creation Schema
export const createJobSchema = Joi.object({
  title: Joi.string().min(3).max(200).required(),
  description: Joi.string().min(10).required(),
  company: Joi.string().required(),
  location: Joi.string().required(),
  salaryRange: Joi.object({
    min: Joi.number().min(0).required(),
    max: Joi.number().min(Joi.ref("min")).required(),
  }).required(),
  type: Joi.string()
    .valid("full-time", "part-time", "internship", "contract")
    .required(),
});

// Job Update Schema
export const updateJobSchema = Joi.object({
  title: Joi.string().min(3).max(200),
  description: Joi.string().min(10),
  location: Joi.string(),
  salaryRange: Joi.object({
    min: Joi.number().min(0),
    max: Joi.number().min(Joi.ref("min")),
  }),
  type: Joi.string().valid("full-time", "part-time", "internship", "contract"),
});
