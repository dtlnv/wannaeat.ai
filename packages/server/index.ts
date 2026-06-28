import express from "express";
import recipeRouter from "./routes/recipe";
import { asyncHandler } from "./utils/async.handler";
import { errorMiddleware } from "./utils/error.middleware";

const app = express();
app.use(express.json());

app.use("/api", asyncHandler(recipeRouter));
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
