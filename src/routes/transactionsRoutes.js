import { Router } from "express";
import { getTransactions, newTransaction } from "../controllers/transactionsController.js";
import { authValidation } from "../middlewares/authValidationMiddleware.js";
import { transactionValidation } from "../middlewares/transactionValidationMiddleware.js";

const router = Router();

router.use(authValidation);

router.post("/newtransaction", transactionValidation, newTransaction);
router.get("/balance", getTransactions);

export default router;
