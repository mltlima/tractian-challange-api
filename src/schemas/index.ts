import Joi from 'joi';

export const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

const schemas = {
    loginSchema,
};

export default schemas;