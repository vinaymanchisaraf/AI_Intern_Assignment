import { getInputText } from "./utils.js";
import { getSummary } from "./llm.js";

async function main() {
  const text = getInputText();

  if (!text.trim()) {
    console.error("Empty input provided.");
    return;
  }

  console.log("\n Processing...\n");

  const result = await getSummary(text);

  console.log("=================================");
  console.log("SUMMARY:");
  console.log(result.summary);

  console.log("\n KEY POINTS:");
  result.keyPoints.forEach((point, index) => {
    console.log(`${index + 1}. ${point}`);
  });

  console.log("\n SENTIMENT:");
  console.log(result.sentiment.toUpperCase());
  console.log("=================================\n");
}

main();