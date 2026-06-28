import type { Request, Response } from "express";
import { z } from "zod";
import { generateRecipes } from "./llm";
import { buildRecipePrompt, RECIPE_CHEF_INSTRUCTIONS } from "./recipe.prompt";
import { CreateRecipeBodySchema } from "./recipe.types";

export async function createRecipe(req: Request, res: Response): Promise<void> {
	const parsedBody = CreateRecipeBodySchema.safeParse(req.body);

	if (!parsedBody.success) {
		res.status(400).json({
			error: "Invalid request body",
			details: z.treeifyError(parsedBody.error),
		});
		return;
	}

	const { ingredients, message } = parsedBody.data;
	const prompt = buildRecipePrompt(ingredients, message);

	const recipeMessage = await generateRecipes({
		prompt,
		instructions: RECIPE_CHEF_INSTRUCTIONS,
	});

	res.status(200).json({ message: recipeMessage });
}
