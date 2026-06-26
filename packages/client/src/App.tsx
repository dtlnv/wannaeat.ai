import { useState } from "react";
import { AppIntro } from "./components/app-intro";
import { Header } from "./components/header";
import { IngredientsSelection } from "./components/ingredients-selection";
import { PreviewForm } from "./components/preview-form";

function App() {
	const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

	return (
		<div className="min-h-svh bg-background text-foreground">
			<div className="mx-auto w-full max-w-[76rem] px-4 py-8 sm:px-6 sm:py-12 md:px-6 md:py-16">
				<Header />
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
							<PreviewForm selectedIngredients={selectedIngredients} />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default App;
