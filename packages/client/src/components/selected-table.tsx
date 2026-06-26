import { ArrowRight } from "lucide-react";
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

export function PreviewForm() {
	return (
		<>
			<section className="mb-10 pt-8">
				<div className="mb-4 flex items-baseline justify-between">
					<h2 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
						Selected
					</h2>
					<span className="font-mono text-xs text-muted-foreground">
						3 items
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
						{[
							{ name: "Tomato", note: "4, ripe" },
							{ name: "Onion", note: "1 large" },
							{ name: "Olive oil", note: "2 tbsp" },
						].map((row) => (
							<TableRow key={row.name}>
								<TableCell className="font-mono text-sm uppercase tracking-wide">
									{row.name}
								</TableCell>
								<TableCell>
									<Input
										defaultValue={row.note}
										className="h-8 rounded-none border-0 border-b border-dashed border-border px-0 shadow-none focus-visible:ring-0"
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</section>
			<section className="mb-10 border-t border-border pt-8">
				<label
					htmlFor="comment"
					className="mb-3 block text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground"
				>
					Anything else?
				</label>
				<Textarea
					id="comment"
					placeholder="No oven, vegetarian, cooking for two…"
					className="resize-none border-dashed"
					rows={3}
				/>
			</section>
			<Button size="lg" className="w-full gap-2">
				Find recipes
				<ArrowRight className="size-4" />
			</Button>
		</>
	);
}
