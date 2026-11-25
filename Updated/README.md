# Updated LIMAS automation

This folder contains the current test scripts, plans, workbook inventories, configuration templates, helper scripts, and execution documentation.

[Download the source-only ZIP](Updated-source.zip) to avoid downloading the separate media folder. Extract the entire ZIP and open its project folder.

Start with [PROJECT-HANDOFF.txt](PROJECT-HANDOFF.txt), [EXECUTION-STATUS.txt](EXECUTION-STATUS.txt), and the [execution-status tables](execution-status). Repair explanations and application findings are in [docs/execution-records](docs/execution-records).

- 134 planned batches: 97 finished, 37 remaining.
- User & License Hub: ULH-001 through ULH-018 executed; ULH-019 through ULH-028 remain.
- 2,599 cases: 1,601 passed, 108 failed, 183 skipped, 707 not executed.
- Test User approval (LIMAS-SUD-151) was attempted once and failed with HTTP 500; the request remains pending and the user has no license.
- Server Licensing was excluded from execution.

Bulk test execution remains stopped. Do not start an all-suite run automatically.

## Local setup

Use Node.js 20 or newer. Run `npm ci`, copy `.env.example` to `.env`, and enter the deployed URL and credentials locally. Run `npm run typecheck` to check TypeScript; `npm run batches:list` lists batches without launching browsers.

## Separate media

`test-runs`, generated reports/media, saved login sessions, real credentials, dependencies and temporary files are excluded. Historical evidence paths in CSV/JSON refer to separately delivered media. The Dashboard media upload is paused at 2/25 batches and is not yet a complete download.

The previous repository folders are retained outside `Updated`.
