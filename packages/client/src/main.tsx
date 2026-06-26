import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

const reactQuery = new QueryClient();

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<QueryClientProvider client={reactQuery}>
			<ThemeProvider storageKey="vite-ui-theme">
				<App />
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>,
);
