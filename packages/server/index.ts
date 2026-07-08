import express from "express";
import recipeRouter from "./routes/recipe";
import { errorMiddleware } from "./utils/error.middleware";

const app = express();
app.use(express.json());

app.use("/api", recipeRouter);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
