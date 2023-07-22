const Joi = require('joi');

const bookschema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    price: Joi.number(),

})

module.exports = bookschema