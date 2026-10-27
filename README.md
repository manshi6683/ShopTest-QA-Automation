# ShopTest — QA Automation Project

A hands-on Quality Assurance (QA) portfolio project demonstrating **UI automation, API testing, SQL database validation, and test documentation** using JavaScript, Playwright, Postman, and PostgreSQL.

## 📌 Project Overview

ShopTest is a QA automation project created to practise software testing across an e-commerce workflow. It includes automated browser tests, API validation, SQL-based data-integrity checks, and structured QA documentation.

The project demonstrates how test cases can be designed, executed, analysed, and documented using commonly used QA tools.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| JavaScript | Test scripting |
| Playwright Test | UI and API automation |
| Postman | Manual API testing |
| PostgreSQL | Relational database testing |
| SQL | Database validation |
| Node.js and npm | Runtime and dependency management |
| Git and GitHub | Version control and project hosting |

## 🧪 Testing Coverage

### 1. UI Automation Testing

Automated UI test cases cover:

- Login with valid credentials
- Login with an invalid password
- Empty login form validation
- Logout functionality
- Product inventory display
- Alphabetical product sorting
- Price sorting from low to high
- Add products to the cart
- Remove products from the cart
- Successful checkout
- Checkout validation for missing first name
- Checkout validation for missing last name
- Checkout validation for missing postal code
- Cancel checkout

### 2. API Testing

Playwright API tests cover:

- Retrieve all products
- Retrieve a single product
- Retrieve product categories
- Limit the product response to five items

The API tests use the Fake Store API. These tests validate API responses and are separate from the local PostgreSQL database tests.

### 3. SQL Database Validation

PostgreSQL validation queries cover:

- Duplicate customer email detection
- Order total mismatch detection
- Invalid product price and stock checks
- Order counts grouped by status

The SQL tests use a local database named `shoptest_qa` with sample data.

## 📁 Project Structure

```text
ShopTest/
├── tests/
│   ├── ui/
│   │   ├── login.spec.js
│   │   ├── inventory.spec.js
│   │   └── checkout.spec.js
│   └── api/
│       └── products.spec.js
├── postman/
│   └── ShopTest API Tests.postman_collection.json
├── sql/
│   └── qa_validation.sql
├── README.md
├── test-cases.md
├── bug-report.md
├── playwright.config.js
├── package.json
├── package-lock.json
└── .gitignore
```

## ⚙️ Prerequisites

Install the following tools before running the project:

- Node.js and npm
- Git
- PostgreSQL (required for SQL validation)
- Postman (optional, for manually executing the collection)

## 🚀 Setup Instructions

### Step 1: Clone the repository

```bash
git clone https://github.com/manshi6683/ShopTest-QA-Automation.git
cd ShopTest-QA-Automation
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Install the Playwright browser

```bash
npx playwright install chromium
```

## ▶️ Running the Playwright Tests

### Run all UI and API tests

```bash
npx playwright test --reporter=list,html
```

### Run UI tests only

```bash
npx playwright test tests/ui --reporter=list
```

### Run API tests only

```bash
npx playwright test tests/api/products.spec.js --reporter=list
```

### View the HTML test report

```bash
npx playwright show-report
```

The HTML report is generated locally after test execution. Keep the terminal open while viewing the report.

**Note:** Always use the latest test execution output to report the actual number of passed, failed, or skipped tests.

## 🗄️ SQL Database Validation

The SQL validation script requires:

- A running PostgreSQL server
- A database named `shoptest_qa`
- The required tables and sample data

Run the SQL validation file from the project root:

```bash
psql -h 127.0.0.1 -p 5432 -U postgres -d shoptest_qa -f sql/qa_validation.sql
```

Enter your PostgreSQL password when prompted.

### SQL checks

| Test ID | Validation | Expected Result |
|---|---|---|
| SQL-001 | Duplicate customer emails | No duplicate groups |
| SQL-002 | Order total mismatch | No mismatched orders |
| SQL-003 | Invalid product prices or stock | No invalid records |
| SQL-004 | Order counts by status | Counts match the expected dataset |

The SQL file contains validation queries. The database schema and sample data must be created separately before running it.

## 📮 Postman API Collection

The exported Postman collection is available at:

`postman/ShopTest API Tests.postman_collection.json`

To run it:

1. Open Postman.
2. Click **Import**.
3. Select the collection JSON file from the `postman` folder.
4. Review the requests and assertions.
5. Send the requests and inspect their responses and test results.

## 📊 Test Reports and Evidence

Playwright generates local report and test-result folders during execution. These generated files are excluded from version control through `.gitignore`.

For effective QA documentation, maintain evidence such as:

- HTML test reports
- Screenshots or traces for UI failures
- API request and response details
- SQL validation outputs
- Bug reproduction steps
- Expected and actual results

Report a defect as confirmed only when it can be reproduced and supported by evidence.

## 📚 Project Documentation

- **Test Cases:** `test-cases.md`
- **Bug Report:** `bug-report.md`
- **SQL Validation:** `sql/qa_validation.sql`
- **Postman Collection:** `postman/ShopTest API Tests.postman_collection.json`

## 🎯 Learning Outcomes

Through this project, I practised:

- Writing and organising test cases
- Automating browser workflows using Playwright
- Testing API responses and assertions
- Writing SQL queries for database validation
- Investigating duplicate records and data-integrity issues
- Reviewing automated test reports
- Documenting QA findings
- Managing source code with Git and GitHub

## 👩‍💻 Author

**Manshi**

GitHub: [@manshi6683](https://github.com/manshi6683)

Project Repository: [ShopTest-QA-Automation](https://github.com/manshi6683/ShopTest-QA-Automation)
