import { transactionsCollection } from "../database/db.js";

export async function newTransaction(req, res) {
	const transaction = req.transaction;

	try {
		await transactionsCollection.insertOne(transaction);
		res.status(201).send(transaction);
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
}

export async function getTransactions(req, res) {
	const { email } = req.user;

	try {
		const transactions = await transactionsCollection.find({ author: email }).toArray();
		res.send(transactions);
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
}
