import bcrypt from "bcrypt";
import { usersCollection, sessionsCollection } from "../database/db.js";

export async function signInValidation(req, res, next) {
	const { email, password } = req.body;

	const user = await usersCollection.findOne({ email });
	if (!user) {
		return res.status(401).send({ message: "Email ou senha inválidos" });
	}

	const isPasswordCorrect = bcrypt.compareSync(password, user.password);
	if (!isPasswordCorrect) {
		return res.status(401).send({ message: "Email ou senha inválidos" });
	}

  const sessionAlreadyExists = await sessionsCollection.findOne({ userId: user._id });
  if (sessionAlreadyExists) {
    await sessionsCollection.deleteOne({ userId: user._id });
  }

  req.user = user;

	next();
}
