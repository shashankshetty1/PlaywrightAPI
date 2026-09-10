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
  - waiting for getByRole('button', { name: 'Continue arrow-right' })
    - locator resolved to <button disabled type="button" class="ant-btn css-dev-only-do-not-override-149w44n css-var-r1 ant-btn-primary ant-btn-color-primary ant-btn-variant-solid">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is not enabled
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is not enabled
  16 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is not enabled
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - complementary [ref=e5]:
      - generic [ref=e7]:
        - generic [ref=e8]:
          - button "Hide navigation" [expanded] [ref=e9] [cursor=pointer]:
            - img "menu-fold" [ref=e11]
          - heading "ContextWeave" [level=3] [ref=e14]
          - generic [ref=e15]: FROM DATA TO DECISIONS
        - menu [ref=e16]:
          - text: Explore
          - group [ref=e17]:
            - menuitem "file-text Reports" [ref=e18] [cursor=pointer]:
              - img "file-text" [ref=e19]
              - generic [ref=e22]: Reports
            - menuitem "question-circle Ask" [ref=e23] [cursor=pointer]:
              - img "question-circle" [ref=e24]
              - generic [ref=e28]: Ask
            - menuitem "experiment What-if Lenses" [ref=e29] [cursor=pointer]:
              - img "experiment" [ref=e30]
              - generic [ref=e33]: What-if Lenses
          - text: Build & Configure
          - group [ref=e34]:
            - menuitem "plus New Graph" [ref=e35] [cursor=pointer]:
              - img "plus" [ref=e36]
              - generic [ref=e40]: New Graph
            - menuitem "database Sources" [ref=e41] [cursor=pointer]:
              - img "database" [ref=e42]
              - generic [ref=e45]: Sources
            - menuitem "table Data Catalog" [ref=e46] [cursor=pointer]:
              - img "table" [ref=e47]
              - generic [ref=e50]: Data Catalog
            - menuitem "deployment-unit Graph Studio" [ref=e51] [cursor=pointer]:
              - img "deployment-unit" [ref=e52]
              - generic [ref=e55]: Graph Studio
          - text: Trust & Operations
          - group [ref=e56]:
            - menuitem "safety-certificate Audit & Governance" [ref=e57] [cursor=pointer]:
              - img "safety-certificate" [ref=e58]
              - generic [ref=e61]: Audit & Governance
            - menuitem "setting Settings" [ref=e62] [cursor=pointer]:
              - img "setting" [ref=e63]
              - generic [ref=e66]: Settings
        - generic [ref=e67]:
          - generic [ref=e68]: SIGNED IN AS
          - generic [ref=e69]:
            - generic [aria-hidden] [ref=e70]: AO
            - generic [ref=e71]:
              - generic [ref=e72]: adaeze.okonjo@vriodigital.com
              - generic [ref=e73]: Platform Admin
          - button "Sign out" [ref=e74] [cursor=pointer]
    - main [ref=e77]:
      - generic [ref=e78]:
        - generic [ref=e79]:
          - heading "Sources" [level=3] [ref=e80]
          - generic [ref=e81]: Registered source systems and their connection health. Credentials are held by reference — ContextWeave never stores a raw secret. Registering a source kicks off extraction and profiling automatically.
        - button "plus Connect source" [ref=e84] [cursor=pointer]:
          - img "plus" [ref=e86]
          - generic [ref=e90]: Connect source
      - generic [ref=e91]:
        - generic [ref=e94]:
          - generic [ref=e95]:
            - generic [ref=e96]: REGISTERED SOURCES
            - generic [ref=e98]: "0"
          - generic [ref=e100]: real, from GET /sources
        - generic [ref=e103]:
          - generic [ref=e104]:
            - generic [ref=e105]: PROFILED TABLES
            - generic [ref=e107]: "0"
          - generic [ref=e109]: across all sources
        - generic [ref=e112]:
          - generic [ref=e113]:
            - generic [ref=e114]: PROFILED COLUMNS
            - generic [ref=e116]: "0"
          - generic [ref=e118]: across all sources
        - generic [ref=e121]:
          - generic [ref=e122]:
            - generic [ref=e123]: PROFILED DOCUMENTS
            - generic [ref=e125]: "0"
          - generic [ref=e127]: across Drive sources
      - alert [ref=e128]:
        - img "info-circle" [ref=e130]
        - generic [ref=e133]: Connection status updates as soon as a source is registered. Table and column counts remain at 0 until metadata profiling has been completed for that source.
      - generic [ref=e136]:
        - heading "No data source is connected" [level=4] [ref=e141]
        - generic [ref=e142]: Register a BigQuery project or a Drive folder and it will appear here the instant it is connected, with extraction and profiling kicked off automatically.
        - button "plus Connect source" [ref=e144] [cursor=pointer]:
          - img "plus" [ref=e146]
          - generic [ref=e150]: Connect source
        - generic [ref=e151]:
          - generic [ref=e153]:
            - generic [ref=e154]: "1"
            - generic [ref=e155]:
              - strong [ref=e156]: Pick a connector
              - emphasis [ref=e157]: BigQuery or Google Drive
          - generic [ref=e159]:
            - generic [ref=e160]: "2"
            - generic [ref=e161]:
              - strong [ref=e162]: Authorise
              - emphasis [ref=e163]: sign in — no key file to upload
          - generic [ref=e165]:
            - generic [ref=e166]: "3"
            - generic [ref=e167]:
              - strong [ref=e168]: Choose datasets
              - emphasis [ref=e169]: profiling starts automatically
        - generic [ref=e170]: Credentials are held by reference — ContextWeave never stores a raw secret.
  - generic [ref=e171]:
    - dialog "Connect a source Registration → credentials by reference → test → dictionary → policy. Profiling starts automatically on completion.":
      - generic [ref=e172]:
        - button "Close" [active] [ref=e173] [cursor=pointer]:
          - generic "Close" [ref=e174]:
            - img "close" [ref=e175]
        - generic [ref=e180]:
          - heading "Connect a source" [level=4] [ref=e181]
          - text: Registration → credentials by reference → test → dictionary → policy. Profiling starts automatically on completion.
        - generic [ref=e182]:
          - generic [ref=e183]:
            - generic [ref=e185]:
              - generic [ref=e186]: "1"
              - generic [ref=e188]: Connector
            - generic [ref=e193]:
              - generic [ref=e194]: "2"
              - generic [ref=e196]: Connection
            - generic [ref=e201]:
              - generic [ref=e202]: "3"
              - generic [ref=e204]: Test & Finish
          - alert [ref=e207]:
            - img "info-circle" [ref=e209]
            - generic [ref=e212]: Google BigQuery, Google Drive, Gmail connect for real and carry a catalogue — pick one to sign in and browse what it holds. MySQL, PostgreSQL, Snowflake take the connection details on the next step and register a source; nothing profiles them yet, so each is listed on Sources and not in the Data Catalog. The 5 under Product vision are not built — clicking one shows why.
          - generic [ref=e214]:
            - generic [ref=e215]:
              - generic [ref=e216]:
                - img "search" [ref=e218]
                - textbox "Search connectors" [ref=e221]
              - generic [ref=e223] [cursor=pointer]:
                - 'generic "Filter: All" [ref=e224]':
                  - text: "Filter: All"
                  - combobox "Filter" [ref=e225]
                - img "down" [ref=e227]
            - generic [ref=e230]:
              - heading "Available now — pick one 6" [level=5] [ref=e231]:
                - text: Available now — pick one
                - generic [ref=e232]: "6"
              - generic [ref=e233]:
                - generic [ref=e237] [cursor=pointer]:
                  - img "Google BigQuery" [ref=e239]
                  - generic [ref=e243]:
                    - strong [ref=e245]: Google BigQuery
                    - text: real connector — MVP
                - generic [ref=e249] [cursor=pointer]:
                  - img "Google Drive" [ref=e251]
                  - generic [ref=e258]:
                    - strong [ref=e260]: Google Drive
                    - text: real connector — docs, sheets, files
                - generic [ref=e264] [cursor=pointer]:
                  - img "Gmail" [ref=e266]
                  - generic [ref=e272]:
                    - strong [ref=e274]: Gmail
                    - text: real connector — email + attachments
                - generic [ref=e278] [cursor=pointer]:
                  - img "MySQL" [ref=e280]
                  - generic [ref=e285]:
                    - strong [ref=e287]: MySQL
                    - text: registers a connection — no profiler yet
                - generic [ref=e291] [cursor=pointer]:
                  - img "PostgreSQL" [ref=e293]
                  - generic [ref=e298]:
                    - strong [ref=e300]: PostgreSQL
                    - text: registers a connection — no profiler yet
                - generic [ref=e304] [cursor=pointer]:
                  - img "Snowflake" [ref=e306]
                  - generic [ref=e314]:
                    - strong [ref=e316]: Snowflake
                    - text: registers a connection — no profiler yet
            - generic [ref=e317]:
              - heading "Product vision — not yet built 5" [level=5] [ref=e318]:
                - text: Product vision — not yet built
                - generic [ref=e319]: "5"
              - generic [ref=e320]:
                - generic [ref=e324] [cursor=pointer]:
                  - img "Outlook" [ref=e326]
                  - generic [ref=e332]:
                    - strong [ref=e334]: Microsoft Outlook
                    - text: email + attachments
                - generic [ref=e338] [cursor=pointer]:
                  - img "SAP" [ref=e340]
                  - generic [ref=e343]:
                    - strong [ref=e345]: SAP PM / S4HANA
                    - text: asset & work-order master
                - generic [ref=e349] [cursor=pointer]:
                  - img "OSIsoft PI" [ref=e351]
                  - generic [ref=e354]:
                    - strong [ref=e356]: OSIsoft PI
                    - text: historian / telemetry
                - generic [ref=e360] [cursor=pointer]:
                  - img "SharePoint" [ref=e362]
                  - generic [ref=e366]:
                    - strong [ref=e368]: SharePoint / docs
                    - text: contracts · manuals · PDFs
                - generic [ref=e372] [cursor=pointer]:
                  - img "SQL database" [ref=e374]
                  - generic [ref=e378]:
                    - strong [ref=e380]: SQL database
                    - text: MSSQL · Oracle
          - separator [ref=e381]
          - generic [ref=e383]:
            - button "Cancel" [ref=e385] [cursor=pointer]
            - button "Continue arrow-right" [disabled] [ref=e388]:
              - generic: Continue
              - img "arrow-right"
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
  15 |   await page.getByRole('button', { name: 'plus Connect source' }).nth(1).click();
  16 | 
  17 |   // Source registration
> 18 |   await page.getByRole('button', { name: 'Continue arrow-right' }).click();
     |                                                                    ^ Error: locator.click: Test timeout of 30000ms exceeded.
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