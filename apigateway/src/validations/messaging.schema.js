import Joi from "joi";

// Message Send Schema
export const sendMessageSchema = Joi.object({
  to: Joi.string().required(), // userId or employerId
  message: Joi.string().min(1).max(1000).required(),
});

// Message Fetch Schema
export const fetchMessagesSchema = Joi.object({
  conversationId: Joi.string().required(),
  limit: Joi.number().integer().min(1).max(100).default(20),
  offset: Joi.number().integer().min(0).default(0),
});
