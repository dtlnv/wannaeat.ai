import { useState } from "react";
import { useForm } from "react-hook-form";
import { AppIntro } from "./components/app-intro";
import { Header } from "./components/header";
import { IngredientsSelection } from "./components/ingredients-selection";
import { PreviewForm } from "./components/preview-form";
import { RecipeLoader } from "./components/recipe-loader";
import type { RecipeFormData } from "./types";

function App() {
	const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
	const { control, handleSubmit, register } = useForm<RecipeFormData>({
		defaultValues: { ingredients: [], message: "" },
	});
	const [loading, setLoading] = useState(false);

	const onSubmit = (data: RecipeFormData) => {
		console.log(data);
		// TODO: Implement recipe generation logic here
		setLoading(true);
	};

	return (
		<div className="min-h-svh bg-background text-foreground">
			<div className="mx-auto w-full max-w-[76rem] px-4 py-8 sm:px-6 sm:py-12 md:px-6 md:py-16">
				<Header />
				{loading ? (
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
