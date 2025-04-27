import * as Joi from 'joi'
import { userSchema } from '../users/user.schema'

export const urlSchema = Joi.object({
  id: Joi.number().integer().positive(),
  url: Joi.string().uri().required(),
  name: Joi.string().max(255).required(),
  description: Joi.string().allow('', null),
  image_url: Joi.string().uri().allow('', null),
  user_id: Joi.number().integer().positive().required(),
  category_id: Joi.number().integer().positive().allow(null),
  created_at: Joi.date(),
  updated_at: Joi.date(),
  user: userSchema,
  category: Joi.object({
    id: Joi.number().integer().positive(),
    name: Joi.string().required(),
    user_id: Joi.number().integer().positive().required(),
  }).allow(null),
})
