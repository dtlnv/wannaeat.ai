import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const INGREDIENTS: Record<string, string[]> = {
	// Ingredients are grouped by category, and each category has an array of ingredients
	fruits: [
		"apple",
		"banana",
		"orange",
		"grapes",
		"mango",
		"kiwi",
		"berries",
		"watermelon",
		"pineapple",
		"pomegranate",
		"lemon",
	],
	vegetables: [
		"potato",
		"tomato",
		"onion",
		"garlic",
		"ginger",
		"capsicum",
		"carrot",
		"cabbage",
		"cauliflower",
		"lettuce",
		"spinach",
		"broccoli",
		"peas",
		"corn",
		"zucchini",
		"pumpkin",
		"sweet potato",
		"cucumber",
		"beetroot",
	],
	plants: [
		"avocado",
		"asparagus",
		"artichoke",
		"brussels sprouts",
		"celery",
		"eggplant",
		"mushroom",
	],
	dairy: [
		"milk",
		"curd",
		"butter",
		"cheese",
		"yogurt",
		"cream",
		"fetta",
		"mozzarella",
		"parmesan",
		"philadelphia",
		"eggs",
	],
	meat: ["chicken", "mutton", "beef", "pork", "bacon", "sausage", "ham"],
	seafood: [
		"fish",
		"prawns",
		"crab",
		"lobster",
		"squid",
		"mussels",
		"clams",
		"oysters",
		"salmon",
	],
	greens: [
		"dill",
		"parsley",
		"cilantro",
		"mint",
		"basil",
		"thyme",
		"rosemary",
		"oregano",
	],
	canned: [
		"beans",
		"canned-corn",
		"canned-peas",
		"canned-tuna",
		"canned-sardines",
		"canned-soup",
		"tomato-paste",
		"tomato-sauce",
	],
	frozen: [
		"frozen-veggies",
		"frozen-fruits",
		"frozen-meat",
		"frozen-seafood",
		"frozen-snacks",
		"pizza",
		"dumplings",
		"fries",
		"nuggets",
		"ice-cream",
		"pierogies",
	],
	bakery: [
		"bread",
		"buns",
		"rolls",
		"bagels",
		"muffins",
		"croissants",
		"cookies",
		"cakes",
		"pastries",
		"donuts",
		"pies",
		"sandwiches",
	],
	beverages: [
		"coffee",
		"tea",
		"juice",
		"soda",
		"energy-drinks",
		"water",
		"milkshakes",
		"smoothies",
	],
	snacks: [
		"chips",
		"popcorn",
		"nuts",
		"seeds",
		"crackers",
		"granola-bars",
		"candy",
		"chocolates",
		"gum",
	],
	spices: ["salt", "pepper", "cinnamon", "paprika"],
	sauces: [
		"ketchup",
		"mayonnaise",
		"mustard",
		"soy-sauce",
		"vinegar",
		"hot-sauce",
		"bbq-sauce",
		"salsa",
		"pasta-sauce",
		"salad-dressing",
		"maple-syrup",
	],
	grains: [
		"rice",
		"cereal",
		"oats",
		"bulgur",
		"couscous",
		"farro",
		"millet",
		"polenta",
	],
	"cooking-oil": [
		"olive-oil",
		"coconut-oil",
		"vegetable-oil",
		"canola-oil",
		"sesame-oil",
		"peanut-oil",
		"sunflower-oil",
		"corn-oil",
	],
	baking: ["flour", "sugar", "baking-powder", "baking-soda"],
	pasta: ["spaghetti", "fettuccine", "lasagna", "macaroni", "ravioli"],
};

function formatLabel(value: string) {
	return value.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
}

export function Ingredients() {
	return (
		<Accordion type="multiple" defaultValue={[]}>
			{Object.entries(INGREDIENTS).map(([category, items]) => (
				<AccordionItem key={category} value={category}>
					<AccordionTrigger>
						<span className="flex w-full items-center justify-between pr-2">
							<span className="font-mono text-xs uppercase tracking-[0.14em]">
								{formatLabel(category)}
							</span>
							<span className="font-mono text-xs text-muted-foreground">
								{items.length}
							</span>
						</span>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex flex-wrap gap-2 pb-2 pt-1">
							{items.map((item) => {
								const selected = false; // DEMO_SELECTED.includes(item);
								return (
									<Button
										key={item}
										type="button"
										size="sm"
										variant={selected ? "default" : "outline"}
										className="font-mono text-xs tracking-wide"
									>
										{formatLabel(item)}
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
