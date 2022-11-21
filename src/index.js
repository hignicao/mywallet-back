import express from "express";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js";
import transactionsRoutes from "./routes/transactionsRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(usersRoutes);
app.use(transactionsRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
