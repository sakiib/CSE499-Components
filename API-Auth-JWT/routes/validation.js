// Validation
const Joi = require('@hapi/joi');

// register validation
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .min(3)
            .max(255)
            .required(),
        email: Joi.string()
            .min(3)
            .max(255)
            .required()
            .email(),
        password: Joi.string()
            .min(3)
            .max(1024)
            .required()
    });

    return schema.validate(data);
};

// login validation
const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(3)
            .max(255)
            .required()
            .email(),
        password: Joi.string()
            .min(3)
            .max(1024)
            .required()
    });

    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;