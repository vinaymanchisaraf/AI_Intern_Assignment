import dotenv from "dotenv";
dotenv.config();

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getSummary(text) {
  try {
    const prompt = `
Extract structured information from the text.

Return ONLY valid JSON in this format:
{
  "summary": "one sentence",
  "keyPoints": ["point1", "point2", "point3"],
  "sentiment": "positive | neutral | negative"
}

Text:
${text}
`;

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const raw = response.choices[0].message.content;
    const parsed = JSON.parse(raw);

    return parsed;

  } catch (error) {
    console.error("API failed, using mock data...");
    return {
      summary: "AI improves efficiency and automation.",
      keyPoints: [
        "Reduces manual work",
        "Improves productivity",
        "Enables smarter decisions"
      ],
      sentiment: "positive"
    };
  }
}