import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.get("/api/hello", (req, res) => {
	res.json({ message: "what a beautiful day!" });

	// error example
	// res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
