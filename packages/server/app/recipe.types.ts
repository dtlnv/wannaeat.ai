import { z } from "zod";

export const IngredientInputSchema = z.object({
	name: z.string().min(1, "Ingredient name is required"),
	note: z.string().optional().default(""),
});

export type IngredientInput = z.infer<typeof IngredientInputSchema>;

export const CreateRecipeBodySchema = z.object({
	ingredients: z
		.array(IngredientInputSchema)
		.min(1, "At least one ingredient is required"),
	message: z.string().optional().default(""),
});

export type CreateRecipeBody = z.infer<typeof CreateRecipeBodySchema>;
