import Joi from 'joi';

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

const registerSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

const assetSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().allow(null, ''),
    image: Joi.string().regex(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/).required(),
    model: Joi.string().required(),
    owner: Joi.string().required(),
    status: Joi.string().valid("Running", "Alerting", "Stopped").required(),
    health: Joi.string().required(),
    unit: Joi.string().required(),
});

const schemas = {
    loginSchema,
    registerSchema,
    assetSchema,
};

export default schemas;