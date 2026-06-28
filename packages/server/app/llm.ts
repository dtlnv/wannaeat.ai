import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateRecipes({
	prompt,
	instructions,
	model = "gemini-2.5-flash",
	temperature = 0.5,
}: {
	prompt: string;
	instructions: string;
	model?: string;
	temperature?: number;
}): Promise<string> {
	const response = await genAI.models.generateContent({
		model,
		contents: prompt,
		config: {
			systemInstruction: instructions,
			temperature,
		},
	});

	if (!response.text) {
		throw new Error("Gemini returned an empty response");
	}

	return response.text;
}
