import bcrypt from "bcrypt";
import { usersCollection, sessionsCollection } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";

export async function signUp(req, res) {
	const user = req.user;

	try {
		const hashPassword = bcrypt.hashSync(user.password, 10);
		await usersCollection.insertOne({ ...user, password: hashPassword });
		res.sendStatus(201);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}

export async function signIn(req, res) {
	const user = req.user;
	const token = uuidV4();

	try {
		await sessionsCollection.insertOne({ token, userId: user._id });
		delete user.password;
		res.send({ ...user, token: token });
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
