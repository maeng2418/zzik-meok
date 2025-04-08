import * as Joi from 'joi';

export const userSchema = Joi.object({
  id: Joi.number().integer().positive(),
  email: Joi.string().email().required(),
  name: Joi.string().min(2).max(30).required(),
  password: Joi.string().min(8).required(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
});