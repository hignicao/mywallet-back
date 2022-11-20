import joi from "joi";

export const usersSchema = joi.object({
	name: joi.string().required(),
	email: joi.string().email().required(),
	password: joi.string().required(),
	confirmPassword: joi.string().equal(joi.ref("password")).required().label("Confirm password").messages({ "any.only": "{{#label}} does not match" }),
});
