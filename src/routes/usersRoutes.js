import { Router } from "express";
import { signIn, signUp } from "../controllers/usersController.js";
import { signUpValidation } from "../middlewares/signUpValidationMiddleware.js";
import { signInValidation } from "../middlewares/signInValidationMiddleware.js";

const router = Router();

router.post("/signup", signUpValidation, signUp);
router.post("/signin", signInValidation, signIn);

export default router;
