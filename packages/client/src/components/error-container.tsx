import { CloudAlert, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";

interface ErrorContainerProps {
	message: string;
	onReset: () => void;
}

export function ErrorContainer({ message, onReset }: ErrorContainerProps) {
	return (
		<div className="flex flex-col items-center gap-8">
			<div className="flex w-full max-w-xl flex-col gap-4 [animation:rise_0.5s_ease-out_backwards]">
				<div className="flex items-center gap-2 text-muted-foreground/60">
					<CloudAlert className="size-4" strokeWidth={1.5} />
					<span className="font-mono text-[10px] uppercase tracking-[0.18em]">
						Error
					</span>
				</div>
				<p>{message}</p>
			</div>

			<Button
				variant="outline"
				size="sm"
				onClick={onReset}
				className="group gap-2 [animation:rise_0.5s_ease-out_0.1s_backwards]"
			>
				<RotateCcw className="size-3.5 transition-transform duration-500 group-hover:-rotate-[360deg]" />
				Try again
			</Button>

			<style>{`
				@keyframes rise {
					from { opacity: 0; transform: translateY(6px); }
					to { opacity: 1; transform: translateY(0); }
				}
			`}</style>
		</div>
	);
}
