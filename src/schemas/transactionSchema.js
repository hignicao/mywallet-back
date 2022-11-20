import joi from "joi";

export const transactionSchema = joi.object({
  author: joi.string().email().required(),
  date: joi.string().required(),
  description: joi.string().required(),
  value: joi.number().required(),
  balance: joi.boolean().required(),
});
