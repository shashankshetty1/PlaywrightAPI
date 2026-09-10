# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Contextweave.spec.ts >> Connect Google source
- Location: tests\Contextweave.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'plus Connect source' }).nth(1)

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - complementary [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]:
        - heading "ContextWeave" [level=3] [ref=e9]
        - generic [ref=e10]: FROM DATA TO DECISIONS
      - menu [ref=e11]:
        - text: Explore
        - group [ref=e12]:
          - menuitem "file-text Reports" [ref=e13] [cursor=pointer]:
            - img "file-text" [ref=e14]
            - generic [ref=e17]: Reports
          - menuitem "question-circle Ask" [ref=e18] [cursor=pointer]:
            - img "question-circle" [ref=e19]
            - generic [ref=e23]: Ask
          - menuitem "experiment What-if Lenses" [ref=e24] [cursor=pointer]:
            - img "experiment" [ref=e25]
            - generic [ref=e28]: What-if Lenses
        - text: Build & Configure
        - group [ref=e29]:
          - menuitem "plus New Graph" [ref=e30] [cursor=pointer]:
            - img "plus" [ref=e31]
            - generic [ref=e35]: New Graph
          - menuitem "database Sources" [active] [ref=e36] [cursor=pointer]:
            - img "database" [ref=e37]
            - generic [ref=e40]: Sources
          - menuitem "table Data Catalog" [ref=e41] [cursor=pointer]:
            - img "table" [ref=e42]
            - generic [ref=e45]: Data Catalog
          - menuitem "deployment-unit Graph Studio" [ref=e46] [cursor=pointer]:
            - img "deployment-unit" [ref=e47]
            - generic [ref=e50]: Graph Studio
        - text: Trust & Operations
        - group [ref=e51]:
          - menuitem "safety-certificate Audit & Governance" [ref=e52] [cursor=pointer]:
            - img "safety-certificate" [ref=e53]
            - generic [ref=e56]: Audit & Governance
          - menuitem "setting Settings" [ref=e57] [cursor=pointer]:
            - img "setting" [ref=e58]
            - generic [ref=e61]: Settings
      - generic [ref=e62]:
        - generic [ref=e63]: SIGNED IN AS
        - generic [ref=e64]:
          - generic [aria-hidden] [ref=e65]: AO
          - generic [ref=e66]:
            - generic [ref=e67]: adaeze.okonjo@vriodigital.com
            - generic [ref=e68]: Platform Admin
        - button "Sign out" [ref=e69] [cursor=pointer]
  - main [ref=e72]:
    - generic [ref=e73]:
      - generic [ref=e74]:
        - heading "Sources" [level=3] [ref=e75]
        - generic [ref=e76]: Registered source systems and their connection health. Credentials are held by reference — ContextWeave never stores a raw secret. Registering a source kicks off extraction and profiling automatically.
      - button "plus Connect source" [ref=e79] [cursor=pointer]:
        - img "plus" [ref=e81]
        - generic [ref=e85]: Connect source
    - generic [ref=e86]:
      - generic [ref=e89]:
        - generic [ref=e90]:
          - generic [ref=e91]: REGISTERED SOURCES
          - generic [ref=e93]: "1"
        - generic [ref=e95]: real, from GET /sources
      - generic [ref=e98]:
        - generic [ref=e99]:
          - generic [ref=e100]: PROFILED TABLES
          - generic [ref=e102]: "0"
        - generic [ref=e104]: across all sources
      - generic [ref=e107]:
        - generic [ref=e108]:
          - generic [ref=e109]: PROFILED COLUMNS
          - generic [ref=e111]: "0"
        - generic [ref=e113]: across all sources
      - generic [ref=e116]:
        - generic [ref=e117]:
          - generic [ref=e118]: PROFILED DOCUMENTS
          - generic [ref=e120]: "0"
        - generic [ref=e122]: across Drive sources
    - alert [ref=e123]:
      - img "info-circle" [ref=e125]
      - generic [ref=e128]: Connection status updates as soon as a source is registered. Table and column counts remain at 0 until metadata profiling has been completed for that source.
    - table [ref=e136]:
      - rowgroup [ref=e137]:
        - row [ref=e138]:
          - columnheader "source name" [ref=e139]
          - columnheader "status" [ref=e140]
          - columnheader "project / account" [ref=e141]
          - columnheader "scope" [ref=e142]
          - columnheader "connected" [ref=e143]
          - columnheader "profiled" [ref=e144]
          - columnheader "Actions" [ref=e145]
      - rowgroup [ref=e146]:
        - row [ref=e147]:
          - cell [ref=e148]:
            - strong [ref=e150]: Conops
            - text: bigquery:vrio-contextweave-demo
          - cell [ref=e151]:
            - generic [ref=e152]:
              - img "check-circle" [ref=e153]
              - text: connected
          - cell "vrio-contextweave-demo" [ref=e157]
          - cell "1 dataset(s)" [ref=e158]
          - cell "9/9/2026, 2:59:18 AM" [ref=e159]
          - cell "0 table(s) · 0 col(s)" [ref=e160]
          - cell [ref=e161]:
            - generic [ref=e162]:
              - button "Edit datasets" [ref=e165] [cursor=pointer]
              - button "Disconnect" [ref=e168] [cursor=pointer]
              - button "Delete" [ref=e171] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Connect Google source', async ({ page }) => {
  4  |   await page.goto('https://cw.vriodigital.com/login');
  5  | 
  6  |   // Login
  7  |   await page.getByRole('textbox', { name: 'Email' }).fill('adaeze.okonjo@vriodigital.com');
  8  |   await page.getByRole('textbox', { name: 'Password' }).fill('1234565666');
  9  |   await page.getByRole('button', { name: 'Sign in' }).click();
  10 | 
  11 |   // Navigate to Sources
  12 |   await page.getByRole('menuitem', { name: 'database Sources' }).click();
  13 | 
  14 |   // Connect a source
> 15 |   await page.getByRole('button', { name: 'plus Connect source' }).nth(1).click();
     |                                                                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  16 | 
  17 |   // Source registration
  18 |   await page.getByRole('button', { name: 'Continue arrow-right' }).click();
  19 | 
  20 |   // Google authentication
  21 |   await page.getByRole('button', { name: 'google Login with Google' }).click();
  22 |   await page.getByRole('button', { name: 'Adaeze Okonjo adaeze.okonjo@' }).click();
  23 |   await page.getByRole('button', { name: 'Allow' }).click();
  24 | 
  25 |   // Source configuration
  26 |   await page.getByRole('textbox', { name: 'E-waste warehouse' }).fill('Conops');
  27 |   await page.getByRole('button', { name: 'Continue arrow-right' }).click();
  28 | 
  29 |   // Preview and finish
  30 |   await page.getByRole('button', { name: 'Run preview' }).click();
  31 |   await page.getByRole('button', { name: 'Finish' }).click();
  32 | 
  33 |   // Close
  34 |   await page.locator('button').filter({ hasText: 'Close' }).click();
  35 | });
```