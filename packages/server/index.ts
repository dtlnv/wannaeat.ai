import express from "express";
import recipeRouter from "./routes/recipe";

const app = express();

app.use(express.json());

app.use("/api", recipeRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
