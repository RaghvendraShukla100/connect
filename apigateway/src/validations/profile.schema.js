import Joi from "joi";

// Profile Update Schema
export const updateProfileSchema = Joi.object({
  name: Joi.string().min(2).max(100),
  bio: Joi.string().max(500),
  skills: Joi.array().items(Joi.string().max(50)),
  experience: Joi.array().items(
    Joi.object({
      company: Joi.string().required(),
      position: Joi.string().required(),
      startDate: Joi.date().required(),
      endDate: Joi.date().optional(),
    })
  ),
  education: Joi.array().items(
    Joi.object({
      school: Joi.string().required(),
      degree: Joi.string().required(),
      year: Joi.number().integer().min(1900).max(new Date().getFullYear()),
    })
  ),
});
