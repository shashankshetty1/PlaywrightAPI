# PlaywrightAPI Framework

This document describes the Playwright framework as it currently exists in this repository.

## Framework overview

The project uses Playwright Test with one browser project: `chromium`. A setup project logs in through the UI and saves browser storage state before Chromium tests run.

The currently implemented tests are:

- `tests/setup/auth.setup.ts` - authenticates and writes `playwright/.auth/user.json`.
- `tests/smoke/auth/login.spec.ts` - logs in through the UI and checks that the user reaches `https://cw.vriodigital.com/E/ask`.
- `tests/Regression/auth/login.spec.ts` - runs the same login-and-URL verification flow in the regression folder.

The remaining suite files are intentionally empty placeholders. Playwright does not execute an empty spec file.

## Current project structure

```text
PlaywrightAPI/
|- pages/
|  |- LoginPage.ts
|  |- AskPage.ts
|  |- GraphStudioPage.ts
|  `- SourcesPage.ts
|- playwright/
|  `- .auth/user.json                 # Generated authentication state
|- tests/
|  |- setup/
|  |  `- auth.setup.ts
|  |- smoke/
|  |  |- auth/login.spec.ts
|  |  |- ask/page-load.spec.ts
|  |  |- graph-studio/page-load.spec.ts
|  |  |- sources/page-load.spec.ts
|  |  `- reports/page-load.spec.ts
|  |- Regression/
|  |  |- auth/
|  |  |- ask/
|  |  |- graph-studio/
|  |  |- sources/
|  |  |- reports/
|  |  |- what-if-lenses/
|  |  `- data-catalog/
|  |- e2e/
|  |- api/
|- playwright.config.ts
|- package.json
`- FRAMEWORK.md
```

`node_modules/`, `test-results/`, `playwright-report/`, and `playwright/.auth/` are generated locally and should not be committed.

Windows file systems are case-insensitive, so the regression suite currently appears as `tests/Regression/`. Use that casing in commands for consistency with the repository.

## Page objects

### LoginPage

`pages/LoginPage.ts` contains the implemented `LoginPage` page object. It keeps login navigation and locators outside test files.

- `navigateToLoginPage()` opens `https://cw.vriodigital.com/login`.
- `login(email, password)` fills the Email and Password fields and clicks **Sign in**.

The other page-object files (`AskPage.ts`, `GraphStudioPage.ts`, and `SourcesPage.ts`) are empty placeholders for future UI coverage.

## Authentication flow

`tests/setup/auth.setup.ts` is the setup-project test.

1. It opens the login page using `LoginPage`.
2. It signs in with the configured credentials.
3. It saves cookies and local storage to `playwright/.auth/user.json`.

The Chromium project depends on this setup project, so a normal Chromium test run performs authentication first. The smoke and regression login tests deliberately log in again because they test the interactive login flow itself.

Credentials are currently written directly in the setup and login specs. Move them to environment variables or a secrets store before sharing the repository or using it in CI.

## Playwright configuration

`playwright.config.ts` defines:

- `testDir: './tests'` to discover tests under `tests/`.
- The HTML reporter, with output in `playwright-report/`.
- `trace: 'on-first-retry'` for retry diagnostics.
- A `setup` project matching `auth.setup.ts`.
- A `chromium` project using Playwright's `Desktop Chrome` settings and the saved authentication state.
- `dependencies: ['setup']`, ensuring authentication runs before Chromium tests.

There are no dedicated smoke, regression, API, end-to-end, Firefox, or WebKit projects yet. Smoke and regression are currently organized by folders only.

## Test suites

### Smoke

`tests/smoke/` contains an implemented login test plus page-load placeholders for Ask, Graph Studio, Sources, and Reports.

### Regression

`tests/Regression/` contains an implemented login test plus placeholders for authentication, Ask, Graph Studio, Sources, Reports, What-if Lenses, and Data Catalog scenarios.

### End-to-end and API

`tests/e2e/` and `tests/api/` contain empty placeholders for future workflows and API coverage. They do not run until Playwright tests are added to them.

## Reports and artifacts

Playwright writes the HTML report to `playwright-report/`. Test artifacts and run metadata are written to `test-results/`. Authentication state is written to `playwright/.auth/user.json` by the setup project.

## Commands

Run these commands from the repository root. On this Windows machine, use `npx.cmd` because PowerShell may block `npx.ps1`.

Install dependencies:

```powershell
npm ci
```

Install the Playwright browser binaries:

```powershell
npx.cmd playwright install
```

Run all tests:

```powershell
npx.cmd playwright test
```

Run all Chromium tests explicitly:

```powershell
npx.cmd playwright test --project=chromium
```

Run all Chromium tests in headed Chrome:

```powershell
npx.cmd playwright test --project=chromium --headed
```

Run the authentication setup only:

```powershell
npx.cmd playwright test --project=setup
```

Run the smoke suite:

```powershell
npx.cmd playwright test tests/smoke --project=chromium
```

Run the regression suite:

```powershell
npx.cmd playwright test tests/Regression --project=chromium
```

Run the login tests marked with `@Smoke`:

```powershell
npx.cmd playwright test --project=chromium --grep "@Smoke"
```

Run one smoke login test:

```powershell
npx.cmd playwright test tests/smoke/auth/login.spec.ts --project=chromium
```

Show the latest HTML report:

```powershell
npx.cmd playwright show-report
```
