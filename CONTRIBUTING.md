# Contributing

## Prerequisites

- Node.js 20+
- Access to a ServiceNow PDI with admin credentials
- `@servicenow/sdk` authenticated against your instance

## Setup

```bash
npm install
npx now-sdk auth --add <your-instance-url> --type basic
```

## Workflow

1. Create a feature branch from `main`
2. Add or modify `.now.ts` files under `src/fluent/`
3. Add server-side scripts under `src/server/` if needed
4. Run `npm run build` to validate your changes compile
5. Run `npm run deploy` to test on your instance
6. Open a pull request against `main`

## Registering New Artifacts

Any new artifact needs a key registered in `src/fluent/generated/keys.ts` before it can be referenced via `Now.ID['your-key']`.

## SDK Documentation

```bash
npx @servicenow/sdk explain <topic> --peek --format=raw   # preview a topic
npx @servicenow/sdk explain <topic> --format=raw          # read in full
npx @servicenow/sdk explain --list --format=raw           # browse all topics
```
