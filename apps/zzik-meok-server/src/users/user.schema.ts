import * as Joi from 'joi'

export const userSchema = Joi.object({
  id: Joi.number().integer().positive(),
  name: Joi.string().min(2).max(50).required(),
  phone: Joi.string()
    .pattern(/^[0-9]{10,20}$/)
    .required(),
  userId: Joi.string().alphanum().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(255).required(),
  created_at: Joi.date(),
  updated_at: Joi.date(),
})
