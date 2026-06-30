# AgenticROS Website

Marketing site for **AgenticROS** — natural language control of ROS2 robots through messaging apps, with support for **multiple AI agents** including [OpenClaw](https://openclaw.ai/), [Claude Code](https://claude.com/product/claude-code), [OpenAI Codex CLI](https://developers.openai.com/codex/cli/), [Claude desktop & Dispatch](https://claude.com/download), [Google Gemini](https://ai.google.dev/gemini-api/docs), and [MCP](https://modelcontextprotocol.io/docs/getting-started/intro). Styled to match the OpenClaw look and feel.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Assets

Add your project assets to `public/`:

- `codex.png` — OpenAI Codex CLI logo (hero)
- `openclaw.png`, `claudecode.png`, `gemini.png`, `ros.webp` — other hero logos

## Repo links

Update GitHub URLs in the components (e.g. `https://github.com/agenticros/agenticros`) if your repo path is different.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS (OpenClaw-style design tokens)
