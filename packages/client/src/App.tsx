import { AppIntro } from "./components/app-intro";
import { Header } from "./components/header";
import { Ingredients } from "./components/ingredients";
import { PreviewForm } from "./components/selected-table";

function App() {
	return (
		<div className="min-h-svh bg-background text-foreground">
			<div className="mx-auto w-full max-w-[76rem] px-6 py-12 sm:py-16">
				<Header />
				<AppIntro />
				<div className="grid grid-cols-1 gap-20 md:grid-cols-2">
					<section className="mb-10 pt-8">
						<Ingredients />
					</section>
					<section className="mb-10 self-start sticky top-0">
						<PreviewForm />
					</section>
				</div>
			</div>
		</div>
	);
}

export default App;
