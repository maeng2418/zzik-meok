import * as Joi from 'joi'

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),
  NEST_API_SERVER_HOST_NAME: Joi.string().required(),
  NEST_API_SERVER_URL: Joi.string().required().uri(),
  NEST_API_SERVER_PORT: Joi.number().default(4000),
  NEST_PC_URL: Joi.string().required().uri(),
  NEST_EXTENSION_URL: Joi.string().required().uri(),
  NEST_ALLOWED_ORIGINS: Joi.string()
    .custom((value, helpers) => {
      try {
        return JSON.parse(value)
      } catch (e) {
        return helpers.error('any.invalid')
      }
    })
    .default('["http://localhost:3000"]'),
  NEST_RATE_LIMIT_TTL: Joi.number().default(60),
  NEST_RATE_LIMIT_MAX: Joi.number().default(100),
})
