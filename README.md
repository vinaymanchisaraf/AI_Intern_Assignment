# AI Text Summarizer CLI

A simple command-line tool that converts **unstructured text into structured insights** using an LLM API.


## Features

* Accepts input via:

  * Direct text (CLI arguments)
  * File input (text file path)
* Generates structured output:

  * One-line summary
  * Three key points
  * Sentiment (positive / neutral / negative)
* Outputs data in **JSON format**
* Clean and readable CLI display
* Fallback mechanism if API fails

---

## Project Structure

```
ai-text-summarizer/
│
├── index.js        # Entry point
├── llm.js          # LLM API logic + fallback
├── utils.js        # Input handling
├── .env.example    # Environment variables template
├── package.json
└── README.md
```

---

## Setup Instructions

### 1. Clone the repository

```
git clone <your-repo-link>
cd ai-text-summarizer
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

Create a `.env` file:

```
OPENAI_API_KEY=your_api_key_here
```

> Do not commit `.env` to GitHub

---

## Usage

### Run with direct text

```
npm start "AI is transforming industries by automating tasks."
```

### Run with file input

```
node index.js input.txt
```

---

## Example Output

```
=================================
SUMMARY:
AI is transforming industries through automation.

KEY POINTS:
1. Reduces manual work
2. Improves efficiency
3. Enables innovation

SENTIMENT:
POSITIVE
=================================
```

---

## Prompt Design

The prompt is designed to enforce a **strict JSON structure**:

* Ensures consistent output
* Makes parsing easier
* Reduces ambiguity in LLM responses

---

## LLM API Used

* OpenAI GPT API

### Why?

* High-quality summarization
* Reliable structured responses
* Easy integration

---

## Error Handling

* Handles empty input
* Handles API failures
* Includes a **fallback response** when API is unavailable


## Example Input

```
Artificial Intelligence is rapidly growing and helping businesses automate repetitive tasks, improve decision-making, and increase productivity.
```

---

## Conclusion

This project demonstrates:

* LLM API integration
* Prompt engineering
* CLI tool development
* Structured data extraction

---

## Author

Vinay Manchisaraf

---
