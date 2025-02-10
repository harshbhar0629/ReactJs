/** @format */

import OpenAI from "openai";

const openai = new OpenAI({
	apiKey:
		"", 
	dangerouslyAllowBrowser: true,
});

export const generateProductDescription = async (
	name,
	imageUrl,
	vendor,
	price
) => {
	try {
		const completion = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages: [
				{
					role: "system",
					content:
						"You are an expert e-commerce product description writer. Write concise, engaging product descriptions in HTML format.",
				},
				{
					role: "user",
					content: `Generate a well-crafted product description wrapped in a <p> tag. The description should be engaging, concise, and highlight the product's key features. Do not describe the image directly.

                    Product Details:
                    Name: ${name}
                    Vendor: ${vendor}
                    Price: $${price}
                    Image URL: ${imageUrl}`,
				},
			],
		});

		console.log(completion);
	} catch (error) {
		console.error("Error generating product description:", error);
		return "<p>Failed to generate description. Please try again.</p>";
	}
};

export const generateProductDescription1 = async (
	name,
	vendor,
	price,
	imageUrl
) => {
	try {
		const response = await fetch(
			"https://api.deepseek.ai/v1/generate-description",
			{
				method: "POST",
				headers: {
					Authorization: ``,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					model: "deepseek-chat",
					product: {
						name: name,
						vendor: vendor,
						price: price,
						imageUrl: imageUrl,
					},
					format: "html",
				}),
			}
		);

		if (!response.ok) {
			throw new Error("Failed to generate description");
		}

		const data = await response.json();
		console.log(data || "Error generating description");
	} catch (err) {
		console.log("error", err.message);
	}
};

export const generateProductDescription2 = async (
	name,
	vendor,
	price,
	imageUrl,
	gender,
	tags,
	fulfillment,
	weight
) => {
	const gApiKey = "";
	const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${gApiKey}`;

	const prompt = `Write a concise, luxury-style product description in the following format:

    Example:
        <p>Silk Satin Hangisi Pumps by Manolo Blahnik, almond toe, iconic Swarovski crystal buckle appliqué on front, leather stiletto heel, logo-embossed insole. and also provide the color of image url</p>
		<p><strong> Features </strong></p>
		<ul>
		<li>Robust and easy to operate</li>
		<li>Notch in the baking tray for the stick</li>
		<li>Variable thermostat 50 Â°C to 300 Â°C</li>
		<li>Equipped with a timer</li>
		<li>Temperature indicator light</li>
		<li>Equipped with drip tray</li>
		<li>Stands on 4 stainless steel feet</li>
		</ul>
		<p><strong> Product specifications </strong></p>
		<ul>
		<li>Net weight: 11kg</li>
		<li>Waffle dimensions: W105 x D105 x H14mm</li>
		<li>Appliance dimensions: W30 x D38 x H25cm</li>
		<li>Total electrical power: 1.75 kW</li>
		<li>230V/50Hz/1Phase 1750W</li>
		</ul>

        Now, generate a similar for this is a branded products and you can take reference for an image and give similar response to above:
        - Product Name: ${name}
        - Vendor: ${vendor}
        - Price: ${price}
		- ImageUrl: ${imageUrl}
		- Gender: ${gender}
		- Tags: ${tags}
		- Fulfillment: ${fulfillment}
		- Weight: ${weight}`;

	try {
		const response = await fetch(apiUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				contents: [{ parts: [{ text: prompt }] }],
			}),
		});

		const data = await response.json();
		console.log(data);
		console.log(data?.candidates?.[0]?.content?.parts?.[0]?.text);
		// const generatedText =
		// data?.candidates?.[0]?.content?.parts?.[0]?.text ||
		// "No description generated.";
	} catch (error) {
		console.error("Error generating description:", error);
	}
};
