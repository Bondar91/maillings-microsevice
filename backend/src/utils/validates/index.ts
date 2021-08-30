import Joi from 'joi';

export const subscriberListSchemaValidation = Joi.object({
  name: Joi.string().min(2).required(),
  subscribersIds: Joi.array().unique().required(),
});

export const subscriberSchemaValidation = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
});

export const templateSchemaValidation = Joi.object({
  title: Joi.string().min(2).required(),
  description: Joi.string().required(),
  body: Joi.string().required(),
});

export const maillingSchemaValidation = Joi.object({
  title: Joi.string().min(2).required(),
  sendCycle: Joi.date().required(),
  templateId: Joi.string().required(),
  listsIds: Joi.array().unique().required(),
});
