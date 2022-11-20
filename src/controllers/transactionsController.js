import { transactionsCollection } from "../database/db.js";

export async function newTransaction(req, res) {
	const transaction = req.transaction;

	try {
		await transactionsCollection.insertOne(transaction);
		res.sendStatus(201);
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
}

export async function getTransactions(req, res) {}
