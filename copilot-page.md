# Roadmap Concierge walkthrough

Use this page as the Copilot Page-friendly version of the hosted walkthrough. Copilot Pages might not run arbitrary custom HTML, so paste this content into a Copilot Page and add the hosted GitHub Pages link at the top after publishing.

## Scenario

You are preparing your organization for Microsoft 365 and Azure change. Your leadership team wants to know what is shipping, whether the tenant is ready, what people are already discussing, and what message should go to stakeholders.

Roadmap Concierge is a Copilot Studio agent that combines:

- Microsoft Release Communications MCP for Microsoft 365 Roadmap and Azure Updates.
- Microsoft MCP Server for Enterprise for read-only Microsoft Graph tenant facts.
- Work IQ Copilot MCP server for permission-bounded work context from mail, meetings, and Teams.
- Optional SharePoint runbooks for internal guidance and citations.

## Prerequisites

- Copilot Studio license and a Developer or Sandbox Power Platform environment.
- Copilot Studio-specific setup completed for Microsoft MCP Server for Enterprise.
- Entra app registration with required MCP permissions and admin consent.
- Microsoft 365 Copilot license for Work IQ Copilot.
- Work IQ Copilot MCP server allowed by your tenant admin where required.
- Optional SharePoint runbook library.
- Two test users with different roles and different recent work context.

## Build steps

### 1. Create the agent shell

1. Go to `https://copilotstudio.microsoft.com/`.
2. Select your Developer or Sandbox environment.
3. Select **Create** > **New agent**.
4. Enter the agent name **Roadmap Concierge** and select **Create**.
5. After the agent loads, set:
   - Description: `Your IT-pro briefing agent - fuses Microsoft Roadmap and Azure Updates with live tenant data and Work IQ context.`
   - Model: **GPT-5.5 Instant**

Note: GPT-5.5 Instant is experimental and might not be enabled by your administrator.

### 2. Add instructions

Paste the instructions from the hosted walkthrough into the agent's **Instructions** field.

### 3. Add Microsoft Release Communications MCP

1. Go to **Tools** > **Add a tool** > **Model Context Protocol**.
2. Use:
   - Server name: `MRC-MCP-Server`
   - Server URL: `https://www.microsoft.com/releasecommunications/mcp`
   - Authentication: **None**
3. Create the server and confirm the Roadmap and Azure Updates tools appear.

### 4. Add Microsoft MCP Server for Enterprise

1. Add a new MCP tool.
2. Use server URL `https://mcp.svc.cloud.microsoft/enterprise`.
3. Choose **OAuth 2.0** > **Manual**.
4. Add the Copilot Studio redirect URL to your Entra app registration.
5. In Power Apps, edit the generated connector and enable managed identity service-principal support.
6. Add the matching federated credential to the app registration.
7. Create and test the connection.

### 5. Add Work IQ Copilot

1. Go to **Tools** > **Add a tool** > **Model Context Protocol**.
2. Search for **Work IQ Copilot**.
3. Select the Work IQ Copilot MCP server.
4. Create a new connection and sign in with the demo user.
5. Run one work-context prompt and accept the permission prompt if shown.

### 6. Optional: add SharePoint runbooks

1. Go to **Knowledge** > **Add knowledge** > **SharePoint**.
2. Add your runbook library URL.
3. Wait for indexing and enable citations.

### 7. Keep topics minimal

Leave only the system **Greeting** topic enabled.

## Validation prompts

Use these prompts in the Copilot Studio test pane:

```text
What Microsoft Teams features are releasing in the next 30 days?
```

```text
What's the status of Roadmap feature ID 526798?
```

```text
How many users in my tenant have a Copilot license?
```

```text
What recent emails or Teams conversations mention Teams rollout blockers?
```

```text
Are any of those upcoming Teams features in preview already inside our tenant, and have people been discussing them recently?
```

```text
Which Azure services are retiring this quarter? Anything we depend on?
```

```text
Who should be included in a readiness follow-up based on recent mail, meetings, and Teams context?
```

```text
Draft a leadership update covering the top three Teams changes and any internal concerns from recent work context.
```

## Publish

1. Turn on the Microsoft 365 Copilot channel.
2. Turn on the Microsoft Teams channel if needed.
3. Submit for tenant admin approval.
4. Install from Copilot Chat > Agents or from Teams after approval.

## What good looks like

- Roadmap-only, tenant-only, Work IQ-only, and joined orchestration paths work.
- Roadmap and Azure Updates IDs appear for release items.
- Tenant facts are separated from work-context signals.
- Runbook citations appear when SharePoint knowledge is connected.
- Communication drafts are ready for human review instead of placeholders.
