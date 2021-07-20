import Joi from 'joi';

export const listSchema = Joi.object({
  name: Joi.string().min(2).required(),
});

export const subscriberSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  list: Joi.object().min(2).pattern(/.*/, [Joi.string()]).required(),
});
