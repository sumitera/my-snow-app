# Incident Helper

A ServiceNow scoped application (`x_1470706_incident`) built with the [Now SDK](https://developer.servicenow.com/dev.do#!/guides/now-sdk) Fluent DSL.

## Features

- Removes mandatory requirement from `short_description` on the incident form

## Prerequisites

- Node.js 20+
- Access to a ServiceNow instance (PDI or enterprise)

## Setup

```bash
npm install
npx now-sdk auth --add <your-instance-url> --type basic
```

## Development

```bash
npm run build      # Compile fluent source files
npm run deploy     # Push built artifacts to the instance
npm run transform  # Convert instance XML artifacts into fluent source
npm run types      # Fetch TypeScript type definitions from the instance
```

## Project Structure

```
src/fluent/                   # Fluent DSL metadata definitions (.now.ts)
  client-scripts/             # Client scripts
  generated/keys.ts           # Auto-generated sys_id key registry
src/server/                   # Server-side scripts referenced by fluent definitions
now.config.json               # App metadata (scope, scopeId, name)
```
