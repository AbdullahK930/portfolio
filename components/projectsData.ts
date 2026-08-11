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
  {
    title: "Inbox Triage",
    tagline:
      "Paste a customer support message, get back its priority, category, and a drafted reply — ready to edit and send.",
    screenshot: "/inbox-triage-demo.png",
    screenshotAlt: "Inbox Triage showing a medium-priority billing ticket",
    stack: ["Next.js", "TypeScript", "Google Gemini API", "Tailwind CSS"],
    liveUrl: "https://inbox-triage-fawn.vercel.app", // EDIT if the URL changes
    repoUrl: "https://github.com/AbdullahK930/inbox-triage", // EDIT: confirm this matches your actual repo name
    sections: [
      {
        label: "Problem",
        body: "Support teams (or solo founders handling their own inbox) lose real time deciding what to answer first and drafting replies from scratch for repetitive, predictable request types.",
      },
      {
        label: "Approach",
        body: "A user pastes in a raw customer message. The backend sends it to an AI model constrained to return only structured JSON — a priority level (urgent/medium/low), a category, a one-sentence summary, and a drafted reply — never free-form text. The result renders as a ticket card with a color-coded priority edge, mirroring real-world triage color conventions, with the reply left editable before copying.",
      },
      {
        label: "Challenges",
        body: "The real risk with an AI-drafted reply is confident-sounding fabrication — inventing an account detail, a refund promise, or a timeline the business can't actually guarantee. I explicitly instructed the model to stay generically helpful rather than specific whenever it can't verify a detail, and kept a human-edit step before anything gets sent rather than treating the draft as final.",
      },
      {
        label: "Result",
        body: "Correctly distinguishes urgency across genuinely different message types — an angry, time-critical account-lockout message is flagged urgent with an appropriately empathetic reply, while a casual feature request is flagged low priority with a lighter tone.",
      },
    ],
  },
  {
    title: "Pulse — Analytics Dashboard",
    tagline:
      "A SaaS analytics dashboard: revenue trends, active users, churn, and signups by channel, with a live time-range filter.",
    screenshot: "/pulse-dashboard-demo.png",
    screenshotAlt: "Pulse dashboard showing revenue, users, and churn metrics",
    stack: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
    liveUrl: "https://saas-dashboard-one-sandy.vercel.app", // EDIT if the URL changes
    repoUrl: "https://github.com/AbdullahK930/saas-dashboard", // EDIT: confirm this matches your actual repo name
    sections: [
      {
        label: "Problem",
        body: "Founders and small teams running a SaaS product need a fast, honest read on how the business is doing — revenue direction, user growth, churn, and where new customers are coming from — without digging through raw spreadsheets or database queries.",
      },
      {
        label: "Approach",
        body: "A single-page dashboard with four headline metric cards, each showing its recent trend as a small embedded sparkline, plus a revenue trend chart, a signups-by-channel breakdown, and a recent-customers table. A time-range toggle (7 days / 30 days / 90 days / 12 months) updates every chart and number together, so the whole view always represents one consistent window of time.",
      },
      {
        label: "Challenges",
        body: "Getting the numbers to look and feel realistic — trending in a believable direction with natural noise, not a flat straight line — while keeping every value fully deterministic. Next.js renders once on the server and once in the browser, so anything based on real randomness produces two different results and throws a hydration error; I built a small seeded number generator instead, which always produces identical output on both sides.",
      },
      {
        label: "Result",
        body: "A clean, interactive dashboard demonstrating dashboard layout, data visualization, and filtering interaction — the exact kind of interface small SaaS products commonly need built for their own internal or customer-facing analytics.",
      },
    ],
  },
  {
    title: "Hookline — HTTP Request Inspector",
    tagline:
      "Get a unique URL, send it any HTTP request, and watch it appear live — method, headers, query params, and body, all inspectable.",
    screenshot: "/hookline-demo.png",
    screenshotAlt: "Hookline landing page with the Create an endpoint button",
    stack: ["Next.js", "TypeScript", "Upstash Redis", "Tailwind CSS"],
    liveUrl: "https://webhook-inspector-six.vercel.app", // EDIT if the URL changes
    repoUrl: "https://github.com/AbdullahK930/webhook-inspector", // EDIT: confirm this matches your actual repo name
    sections: [
      {
        label: "Problem",
        body: "When integrating a webhook (Stripe, GitHub, a payment provider, anything), developers routinely need to see exactly what a third-party service actually sends — real headers, real body, real timing — rather than guessing from documentation.",
      },
      {
        label: "Approach",
        body: "A user generates a unique endpoint URL. Any HTTP request sent to it — any method, any headers, any body — is captured server-side and written to a Redis-backed log, capped at 50 entries per endpoint with a 24-hour expiry. A separate page polls that log every few seconds and renders each request as an expandable card, with HTTP methods color-coded the same way tools like Postman do.",
      },
      {
        label: "Challenges",
        body: "This is the one project in the set with a real, persistent backend rather than a single stateless AI call. Two things needed care: keeping the 'receive a request' endpoint and the 'read the log' endpoint fully separate, so a legitimate GET request being tested doesn't collide with the frontend's own polling; and treating this as a genuinely public tool — capped storage, an expiry window, and a visible on-page warning not to send real secrets to it.",
      },
      {
        label: "Result",
        body: "Correctly captures and displays real request data end-to-end — verified with both a plain GET (browser visit) and a POST with a JSON body via curl, both appearing in the live feed within seconds, headers and body intact.",
      },
    ],
  },
];