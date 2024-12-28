import * as Joi from 'joi'

export const validationSchema = Joi.object({
  API_SERVER_HOST_NAME: Joi.string().required(),
  API_SERVER_URL: Joi.string().required().uri(),
  PC_URL: Joi.string().required().uri(),
  EXTENSION_URL: Joi.string().required().uri(),
})
