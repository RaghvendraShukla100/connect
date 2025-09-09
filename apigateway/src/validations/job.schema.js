import Joi from "joi";

export const createJob = Joi.object({
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().optional(),
    salary: Joi.number().optional(),
  }),
});
