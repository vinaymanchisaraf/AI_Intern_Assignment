import fs from "fs";

export function getInputText() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error("Please provide input text or file path.");
    process.exit(1);
  }

  const input = args.join(" ");

  if (fs.existsSync(input)) {
    return fs.readFileSync(input, "utf-8");
  }

  return input;
}