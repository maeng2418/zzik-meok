import * as Joi from 'joi'
import { userSchema } from '../users/user.schema'

export const urlSchema = Joi.object({
  url: Joi.string().uri().required(),
  title: Joi.string().allow('', null),
  description: Joi.string().allow('', null),
  isBookmarked: Joi.boolean().default(false),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  userId: Joi.number().integer().positive().required(),
  user: userSchema,
})
