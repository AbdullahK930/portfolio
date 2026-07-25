import { ProjectData } from "./ProjectCard";

// EDIT: add each new project as a new object in this array.
// The portfolio page automatically renders one card per entry, in order.
export const PROJECTS: ProjectData[] = [
  {
    title: "Chart GPT",
    tagline:
      "A web app that turns plain-English questions about a CSV file into interactive charts — no formulas, no chart-picker menus, no code.",
    screenshot: "/chartgpt-landing.png",
    screenshotAlt: "ChartGPT landing page",
    stack: [
      "Web frontend (HTML/JS)",
      "Python backend API",
      "Cloud LLM API",
      "Vega-Lite",
      "Docker",
    ],
    repoUrl: "https://github.com/AbdullahK930", // EDIT: swap for the exact repo
    sections: [
      {
        label: "Problem",
        body: "Turning raw data into the right chart takes technical knowledge most people don't have: choosing a chart type, mapping the right columns to X/Y axes, and applying the right aggregation. Tools like Excel and Tableau need UI training; Python/R libraries need real coding skill; and older \"natural language\" charting tools only work with exact keyword matches, breaking on anything vague like \"how are we performing this year?\"",
      },
      {
        label: "Approach",
        body: "A user uploads a CSV and types a question in a chat interface. The backend sends only the data's schema (column names + types) plus the question to a cloud LLM — never the raw data itself, which keeps user data private. The model runs a 9-step reasoning pipeline (intent → column selection → filters → aggregation → chart type → axis mapping → sorting → validation → JSON generation) and returns a Vega-Lite chart spec, which renders client-side as an interactive chart with hover, zoom, and pan. Because conversation history is kept, users can iterate — \"now make it a line chart\" — without starting over.",
      },
      {
        label: "Challenges",
        body: "LLMs hallucinate — the real risk here was the model inventing a column that doesn't exist or misreading a data type. I handled this with a constrained reasoning prompt framework plus a runtime validation layer (\"RegexGuard\") that catches type mismatches — e.g. applying a numeric filter to a text column — before a broken chart ever reaches the user. I also had to design around cloud API latency, keeping the full round trip (schema packaging → LLM reasoning → chart render) under ~2.5 seconds.",
      },
      {
        label: "Result",
        body: "Usability testing with non-technical users scored 86.5 on the System Usability Scale (\"Excellent\"). Across 98 functional and non-functional test cases, 96% passed on the first run. The system supports exporting charts as PNG, SVG, or the underlying JSON spec, plus shareable read-only links.",
      },
      {
        label: "My Contribution",
        body: "Built end-to-end as my Final Year Project — architecture, backend API gateway, the 9-step reasoning pipeline, and the frontend.",
      },
    ],
  },
  {
    title: "Receipt Reader",
    tagline:
      "Upload a photo of a receipt or invoice, get back clean structured data — vendor, date, line items, total — as JSON or CSV.",
    screenshot: "/receipt-reader-demo.png",
    screenshotAlt: "Receipt Reader extracting data from a bakery receipt",
    stack: ["Next.js", "TypeScript", "Google Gemini API", "Tailwind CSS"],
    liveUrl: "https://receipt-reader-kappa.vercel.app", // EDIT if the URL changes
    repoUrl: "https://github.com/AbdullahK930/receipt-reader", // EDIT: confirm this matches your actual repo name
    sections: [
      {
        label: "Problem",
        body: "Manually re-typing receipts and invoices into a spreadsheet is slow, tedious, and error-prone — a real, recurring cost for small businesses doing their own bookkeeping.",
      },
      {
        label: "Approach",
        body: "A user drags in a photo of a receipt. The backend sends the image to a multimodal AI model with a strict instruction to return only a structured JSON object — vendor, date, currency, total, and a list of line items — never freeform text. The result renders back as a literal printed-receipt strip in the UI, with one-click export to JSON or CSV.",
      },
      {
        label: "Challenges",
        body: "AI vision models can misread handwriting-adjacent print, confuse a subtotal with a final total, or return malformed output. I constrained the model to strict JSON mode with an explicit schema and null-handling rules (never guess — return null if a field genuinely can't be read), rather than letting it produce free text.",
      },
      {
        label: "Result",
        body: "Correctly extracts vendor, date, itemized line items, and total — including currency inferred from context — from real, unposed phone-camera photos, not just clean scans.",
      },
    ],
  },
];
