import { Check, Plus } from "lucide-react";
import { useMemo } from "react";
import { INGREDIENTS } from "@/lib/ingredients";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

type IngredientsSelectionProps = {
	selectedIngredients: string[];
	setSelectedIngredients: (ingredients: string[]) => void;
};

export function IngredientsSelection({
	selectedIngredients,
	setSelectedIngredients,
}: IngredientsSelectionProps) {
	const onIngredientClick = (ingredient: string) => {
		if (selectedIngredients.includes(ingredient)) {
			setSelectedIngredients(
				selectedIngredients.filter((i) => i !== ingredient),
			);
		} else {
			setSelectedIngredients([...selectedIngredients, ingredient]);
		}
	};

	const selectedInCategoryCount = useMemo(() => {
		const count: Record<string, number> = {};
		for (const category in INGREDIENTS) {
			count[category] = INGREDIENTS[category].list.filter((item) =>
				selectedIngredients.includes(item),
			).length;
		}
		return count;
	}, [selectedIngredients]);

	return (
		<Accordion type="multiple" defaultValue={[]}>
			{Object.entries(INGREDIENTS).map(([category, items]) => (
				<AccordionItem key={category} value={category}>
					<AccordionTrigger>
						<span className="flex w-full items-center justify-between pr-2">
							<span className="font-mono text-xs uppercase tracking-[0.14em] flex items-center gap-2">
								{items.title}
							</span>
							<span className="font-mono text-xs text-muted-foreground">
								{selectedInCategoryCount[category] > 0
									? `${selectedInCategoryCount[category]}/${items.list.length}`
									: ""}
							</span>
						</span>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-wrap gap-2 pb-2 pt-1">
							{items.list.map((item) => {
								const selected = selectedIngredients.includes(item);
								return (
									<Button
										key={item}
										type="button"
										size="sm"
										variant={selected ? "secondary" : "outline"}
										className="font-mono text-xs tracking-wide"
										onClick={() => onIngredientClick(item)}
									>
										<span className="mr-2">
											{selected ? (
												<Check className="h-4 w-4" />
											) : (
												<Plus className="h-4 w-4" />
											)}
										</span>
										{item}
									</Button>
								);
							})}
						</div>
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
