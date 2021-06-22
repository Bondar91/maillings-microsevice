import Joi from 'joi';

export const listSchema = Joi.object({
  name: Joi.string().min(2).required(),
});
