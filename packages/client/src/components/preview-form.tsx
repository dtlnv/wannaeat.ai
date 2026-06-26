import { WandSparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";
import { Textarea } from "./ui/textarea";

type PreviewFormProps = {
	selectedIngredients: string[];
};

export function PreviewForm({ selectedIngredients }: PreviewFormProps) {
	if (selectedIngredients.length === 0) {
		return (
			<section className="mb-10 pt-8">
				<div className="flex h-full flex-col items-center justify-center gap-4 rounded-md border border-dashed border-border p-8 text-center">
					<h2 className="text-2xl">🥦🍅🥖</h2>
					<p className="text-sm text-muted-foreground">
						Select ingredients to proceed
					</p>
					<p className="text-sm text-ring">
						Select ingredients and they will appear here for you to add notes
						and generate a recipe.
					</p>
				</div>
			</section>
		);
	}

	return (
		<>
			<section className="mb-10 pt-8">
				<div className="mb-4 flex items-baseline justify-between">
					<h2 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
						Selected
					</h2>
					<span className="font-mono text-xs text-muted-foreground">
						{selectedIngredients.length} items
					</span>
				</div>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-40">Ingredient</TableHead>
							<TableHead>Note</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{selectedIngredients.map((ingredient) => (
							<TableRow key={ingredient}>
								<TableCell className="font-mono text-sm uppercase tracking-wide">
									{ingredient}
								</TableCell>
								<TableCell>
									<Input
										placeholder="Enter note, e.g. '0.5 kg', 'two pieces', 'chopped', etc."
										className="h-8 rounded-none border-0 border-b border-dashed border-border px-0 shadow-none focus-visible:ring-0"
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</section>
			<section className="mb-10 border-t border-border pt-8 flex flex-col gap-4">
				<label
					htmlFor="comment"
					className="block text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground"
				>
					Anything else?
				</label>
				<Textarea
					id="comment"
					placeholder="No oven, vegetarian, cooking for two…"
					className="resize-none focus-visible:ring-0"
					rows={3}
				/>
				<Button size="lg" className="gap-2 w-fit" variant="outline">
					<WandSparkles className="h-4 w-4" />
					Generate Recipe
				</Button>
			</section>
		</>
	);
}
