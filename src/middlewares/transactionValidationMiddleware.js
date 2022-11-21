import { transactionSchema } from "../schemas/transactionSchema.js";
import { format } from "date-fns";

export async function transactionValidation(req, res, next) {
	const { description, value, balance } = req.body;
	const { email } = req.user;

	const transaction = {
		author: email,
		date: format(new Date(), "dd/MM"),
		description,
		value: Number(value),
		balance,
	};

	const { error } = transactionSchema.validate(transaction, { abortEarly: false });

	if (error) {
		const errors = error.details.map((err) => err.message);
		return res.status(400).send(errors);
	}

	req.transaction = transaction;

	next();
}
