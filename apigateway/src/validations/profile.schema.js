import Joi from "joi";

export const updateProfile = Joi.object({
  params: Joi.object({ userId: Joi.string().required() }).unknown(true),
  body: Joi.object({
    bio: Joi.string().allow("").max(500),
    skills: Joi.array().items(Joi.string()),
  }),
});
