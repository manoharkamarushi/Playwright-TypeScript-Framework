## 🚀 Playwright TypeScript Enterprise Automation Framework Overview

This project is an enterprise-style Playwright Test automation framework built using:

- Playwright Test Runner  
- TypeScript  
- Page Object Model (POM)  
- Custom Fixtures  
- Multi-role Authentication (Storage State)  
- Environment-based Configuration  
- Tag-driven Suite Execution  
- Azure DevOps CI/CD Ready Setup  
- Allure Reporting (CI-based)  
- Database Validation Layer  

The framework is designed to demonstrate production-grade automation architecture.

Framework Architecture
env/
  qa.env
  staging.env

fixtures/
  testFixture.ts

pages/
  LoginPage.ts
  InventoryPage.ts

tests/
  setup/
    auth.setup.ts
  login/
  inventory/
  approval/

utils/
  auth/
  db/
  factories/
  calculators/

test-data/
  project/
  constants.ts

azure-pipelines.yml
playwright.config.ts

🔐 Multi-Role Authentication

Role-based authentication using storage state
auth.setup.ts generates session once per role
Each test loads role-specific storage state
Full test isolation maintained

Environment Management
Environment-specific configs stored in:
env/qa.env
env/staging.env

Loaded dynamically via: process.env.ENV

🏷 Tag-Driven Suite Strategy

Tests are grouped by feature folders.
Execution controlled via tags:
| Tag         | Purpose             |
| ----------- | ------------------- |
| @smoke      | Critical path       |
| @regression | Full validation     |
| @e2e        | Workflow validation |
| @p1 / @p2   | Priority            |
| @US-XXXX    | Azure Story mapping |

▶ Running Tests
Smoke
npm run test:smoke

Regression
npm run test:regression

E2E
npm run test:e2e

Run Specific File (Headed)
npx playwright test tests/project/project.spec.ts --headed

Debug Mode
PWDEBUG=1 npx playwright test

🗄 Database Validation
PostgreSQL integration
Test-scoped DB fixture
Read-only query usage
Repository abstraction supported
Example: const rows = await dbQuery('SELECT * FROM inventory WHERE name = $1', [name]);

🧮 Test Data Strategy

Data handled via:
Base JSON files (test-data/)
Factory pattern (utils/factories/)
Calculator layer for financial validations

Dynamic project naming: AutoTest_<timestamp>_<random>
Ensures parallel-safe execution.

📊 Reporting
Local

Playwright HTML report
npx playwright show-report

CI

Allure reporting enabled only in CI
Categorized failures
Step-level reporting
Artifact publishing
Generate locally (optional):

npm run allure:generate
npm run allure:open

🔄 CI/CD Strategy (Azure DevOps)

Smoke → On QA push / PR
Regression → Nightly schedule
E2E → Manual release execution
HTML & Allure reports published as artifacts
CI=true automatically enables CI-specific config

Pipeline file:
azure-pipelines.yml
