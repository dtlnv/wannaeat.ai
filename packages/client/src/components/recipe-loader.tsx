import { useEffect, useState } from "react";

const POOL = [
	"🥦",
	"🍅",
	"🥖",
	"🍎",
	"🥛",
	"🍖",
	"🐟",
	"🥬",
	"🥫",
	"❄️",
	"🍞",
	"🥤",
	"🍿",
	"🌶",
	"🌾",
	"🌻",
	"🧁",
	"🍝",
];
const TILES = 5;
const INTERVAL = 1500;

const PHRASES = [
	"Taking a look at your ingredients...",
	"Mixing up some ideas...",
	"Getting creative in the kitchen...",
	"Finding the perfect recipe for you...",
	"Cooking up something special...",
	"Exploring delicious possibilities...",
	"Savoring the flavors of your ingredients...",
	"Whipping up a tasty recipe just for you...",
	"Unleashing the culinary magic...",
	"Crafting a recipe that will make your taste buds dance...",
	"Why is it taking so long? I just need a few more seconds to find the perfect recipe for you...",
	"Almost there! Just a few more moments to create a recipe that will make your taste buds sing...",
];
const PHRASE_INTERVAL = 5000;

export function RecipeLoader() {
	const [phrase, setPhrase] = useState(PHRASES[0]);

	useEffect(() => {
		const id = setInterval(() => {
			setPhrase((prev) => {
				const index = PHRASES.indexOf(prev);
				return PHRASES[(index + 1) % PHRASES.length];
			});
		}, PHRASE_INTERVAL);
		return () => clearInterval(id);
	}, []);

	return (
		<div className="flex flex-col items-center gap-5 py-12">
			<div className="flex gap-2" style={{ perspective: "400px" }}>
				{[...POOL]
					.sort(() => Math.random() - 0.5)
					.slice(0, TILES)
					.map((emoji, i) => (
						<span
							key={i}
							className="flex size-12 items-center justify-center rounded-md border border-border bg-card text-2xl shadow-sm [animation:card-flip_var(--dur)_ease-in-out_infinite]"
							style={
								{
									"--dur": `${INTERVAL}ms`,
									animationDelay: `${i * 70}ms`,
								} as React.CSSProperties
							}
						>
							{emoji}
						</span>
					))}
			</div>

			<p
				key={phrase}
				className="text-center font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground [animation:phrase-in_0.4s_ease-out,text-shimmer_2.2s_linear_infinite]"
				style={{
					WebkitMaskImage:
						"linear-gradient(110deg, rgba(0,0,0,0.35) 35%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.35) 65%)",
					maskImage:
						"linear-gradient(110deg, rgba(0,0,0,0.35) 35%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.35) 65%)",
					WebkitMaskSize: "220% 100%",
					maskSize: "220% 100%",
				}}
			>
				{phrase}
			</p>

			<style>{`
				@keyframes card-flip {
					0%, 100% { transform: rotateY(0deg); }
					50% { transform: rotateY(180deg); }
				}
				@keyframes phrase-in {
					from { opacity: 0; transform: translateY(4px); }
					to { opacity: 1; transform: translateY(0); }
				}
				@keyframes text-shimmer {
					0% { -webkit-mask-position: 160% 0; mask-position: 160% 0; }
					100% { -webkit-mask-position: -60% 0; mask-position: -60% 0; }
				}
			`}</style>
		</div>
	);
}
