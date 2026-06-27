import logo from "@/assets/logo.svg";
import { ModeToggle } from "./mode-toggle";

export function Header() {
	return (
		<header className="mb-12 flex items-center justify-between">
			<div className="flex items-center gap-2.5">
				<img src={logo} alt="WannaEat" className="size-8" />
				<span className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
					wannaeat.ai
				</span>
			</div>
			<ModeToggle />
		</header>
	);
}
