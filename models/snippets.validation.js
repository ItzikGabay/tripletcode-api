const Joi = require('joi');

const snippetsValidation = Joi.object({
    snippet_info: Joi.object({
        title: Joi.string(),
        owner_id: Joi.string(),
    }),
    snippet_settings: Joi.object({
        public_view: Joi.boolean().required(),
    }).required(),
    snippet_data: Joi.required()
})

module.exports = snippetsValidation