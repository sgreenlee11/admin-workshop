# Admin Workshop

Static workshop walkthroughs for Copilot Studio and Microsoft 365 admin scenarios.

## Walkthroughs

- [Roadmap Concierge](./index.html) - build a Copilot Studio agent that combines Microsoft Release Communications MCP, Microsoft MCP Server for Enterprise, Work IQ Copilot, and optional SharePoint runbooks.

## Copilot Page compatibility

Copilot Pages can link to this hosted HTML walkthrough. They do not reliably execute arbitrary custom HTML inline, so this repository also includes a paste-friendly companion:

- [Copilot Page markdown version](./copilot-page.md)

## Local preview

From the repository root:

```powershell
npx http-server . -a 127.0.0.1 -p 8765 -c-1
```

Then open `http://127.0.0.1:8765/`.
