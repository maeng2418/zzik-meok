import * as Joi from 'joi'

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  API_SERVER_HOST_NAME: Joi.string().required(),
  API_SERVER_URL: Joi.string().required().uri(),
  API_SERVER_PORT: Joi.number().default(4000),
  PC_URL: Joi.string().required().uri(),
  EXTENSION_URL: Joi.string().required().uri(),
  HTTPS_KEY_PATH: Joi.string().optional(),
  HTTPS_CERT_PATH: Joi.string().optional(),
  ALLOWED_ORIGINS: Joi.string()
    .custom((value, helpers) => {
      try {
        return JSON.parse(value)
      } catch (e) {
        return helpers.error('any.invalid')
      }
    })
    .default('["http://localhost:3000"]'),
  RATE_LIMIT_TTL: Joi.number().default(60),
  RATE_LIMIT_MAX: Joi.number().default(100),
})
