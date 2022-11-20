import { Router } from "express";
import { signIn, signUp } from "../controllers/usersController.js";
import { signUpValidation } from "../middlewares/signUpValidationMiddleware.js";
import { signInValidation } from "../middlewares/signInValidationMiddleware.js";

const router = Router();

router.post("/cadastro", signUpValidation, signUp);
router.post("/login", signInValidation, signIn);

export default router;
