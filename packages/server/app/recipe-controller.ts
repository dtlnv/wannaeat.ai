import type { Request, Response } from "express";

const superLargeResponse = `
<strong>Once upon</strong> a time, in a land far, far away, there was a small village nestled between rolling hills and lush forests. The villagers lived simple lives, tending to their farms and caring for their families. One day, a mysterious traveler arrived in the village, carrying with him a magical recipe book that promised to create the most delicious dishes ever tasted.

The villagers were skeptical at first, but the traveler assured them that the recipes were tried and true. He demonstrated how to prepare a dish called "Enchanted Stew," which was said to bring joy and happiness to anyone who ate it. The villagers watched in awe as he combined ingredients like fresh herbs, tender vegetables, and a secret blend of spices.

As the stew simmered over the fire, the aroma filled the air, drawing curious villagers from their homes. When the stew was finally ready, the traveler served it to everyone in the village. The moment they took their first bite, smiles spread across their faces, and laughter echoed
 through the village square. The villagers were amazed at how delicious the stew was, and they thanked the traveler for sharing his magical recipes.
The traveler stayed in the village for several days, teaching the villagers how to prepare various dishes from his recipe book. Each meal brought them closer together, fostering a sense of community and friendship. The villagers learned that cooking was not just about nourishment but also about creating memories and sharing love with one another.

As the traveler prepared to leave, he gifted the villagers a copy of his recipe book, ensuring that they could continue to create magical meals for generations to come. The villagers waved goodbye, grateful for the lessons they had learned and the joy that had been brought into their lives.`;

// POST /recipe - Receive instructions for creating a recipe and return a response
export const createRecipe = async (
	req: Request,
	res: Response,
): Promise<void> => {
	const body = req.body;

	if (!body || Object.keys(body).length === 0) {
		res.status(400).json({ error: "Request body is required" });
		return;
	}

	try {
		// sleep for 6 seconds to simulate a long-running operation
		await new Promise((resolve) => setTimeout(resolve, 6000));

		// TODO: business logic here
		res.status(200).json({ message: superLargeResponse });
	} catch {
		res.status(500).json({ error: "Internal server error" });
	}
};
