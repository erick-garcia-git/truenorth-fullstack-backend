const Joi = require('joi')

function validateParams (body) {
  const schema = Joi.object({
    id: Joi.string().required(),
    title: Joi.string().required(),
  })
  const { error, value } = schema.validate(body)
  if (error) {
    throw new Error(error)
  }
  return value
}

module.exports = validateParams