const Joi = require('joi');

const snippetsValidation = Joi.object({
    snippet_data: Joi.object({
        title: Joi.string().required(),
        owner_id: Joi.string().required(),
    }).required(),
    snippet_settings: Joi.object({
        public_view: Joi.boolean().required(),
    }).required(),
    snippet_data: Joi.required()
})

module.exports = snippetsValidation