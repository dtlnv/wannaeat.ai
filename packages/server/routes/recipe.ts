import { Router } from "express";
import { createRecipe } from "../app/recipe.controller";

const router = Router();

router.post("/recipe", createRecipe);

export default router;
