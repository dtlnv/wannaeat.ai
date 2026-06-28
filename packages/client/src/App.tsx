import { useState } from "react";
import { useForm } from "react-hook-form";
import { AppIntro } from "./components/app-intro";
import { ErrorContainer } from "./components/error-container";
import { Header } from "./components/header";
import { IngredientsSelection } from "./components/ingredients-selection";
import { PreviewForm } from "./components/preview-form";
import { RecipeContainer } from "./components/recipe-container";
import { RecipeLoader } from "./components/recipe-loader";
import type { RecipeFormData } from "./types";

function App() {
	const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
	const { control, handleSubmit, register } = useForm<RecipeFormData>({
		defaultValues: { ingredients: [], message: "" },
	});
	const [loading, setLoading] = useState(false);
	const [recipe, setRecipe] = useState<string | null>(null);
	const [error, setError] = useState<string | null>(null);

	const onSubmit = async (data: RecipeFormData) => {
		setLoading(true);

		const response = await fetch("/api/recipe", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const result = await response.json();
			result.error && setError(`${response.statusText}: ${result.error}`);
		} else {
			const result = await response.json();
			result.message && setRecipe(result.message);
		}

		setLoading(false);
	};

	return (
		<div className="min-h-svh bg-background text-foreground">
			<div className="mx-auto w-full max-w-[76rem] px-4 py-8 sm:px-6 sm:py-12 md:px-6 md:py-16">
				<Header />
				{error ? (
					<ErrorContainer message={error} onReset={() => setError(null)} />
				) : recipe ? (
					<RecipeContainer message={recipe} onReset={() => setRecipe(null)} />
				) : loading ? (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-[2px] cursor-wait">
						<RecipeLoader />
					</div>
				) : (
					<>
						<AppIntro />
						<div className="grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-2">
							<section className="mb-10 pt-6 md:pt-8">
								<IngredientsSelection
									selectedIngredients={selectedIngredients}
									setSelectedIngredients={setSelectedIngredients}
								/>
							</section>
							<section className="mb-10 self-start md:sticky md:top-0">
								<div className="md:pl-6">
									<PreviewForm
										selectedIngredients={selectedIngredients}
										control={control}
										register={register}
										onSubmit={handleSubmit(onSubmit)}
									/>
								</div>
							</section>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default App;
