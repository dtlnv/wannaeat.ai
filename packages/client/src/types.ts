export type IngredientField = {
	name: string;
	note: string;
};

export type RecipeFormData = {
	ingredients: IngredientField[];
	message: string;
};
