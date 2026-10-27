\# ShopTest — QA Automation Project



\## Project Overview

ShopTest is a minor QA automation project demonstrating UI testing, API testing, and SQL-based database validation.



\## Tech Stack

\- JavaScript

\- Playwright Test

\- Postman

\- PostgreSQL

\- SQL



\## Testing Coverage



\### UI Automation

Automated tests cover:

\- Login and logout

\- Invalid and empty login inputs

\- Product inventory display and sorting

\- Add and remove products from cart

\- Checkout flow and form validation



\### API Testing

API tests cover:

\- Retrieve all products

\- Retrieve a single product

\- Retrieve product categories

\- Limit the number of returned products



\### Database Validation

SQL checks cover:

\- Duplicate customer emails

\- Order total mismatches

\- Invalid product prices and stock

\- Order counts by status



\## Project Structure



```text

ShopTest/

├── tests/

│   ├── ui/

│   └── api/

├── postman/

├── sql/

│   └── qa\_validation.sql

├── playwright.config.js

├── package.json

└── README.md

```



\## Run UI and API Tests



Install dependencies:



```bash

npm install

npx playwright install chromium

```



Run the full Playwright suite:



```bash

npx playwright test --reporter=list,html

```



Open the HTML report:



```bash

npx playwright show-report

```



\## Run SQL Validation



PostgreSQL must be installed and running, with the `shoptest\_qa` database and its sample tables configured.



```bash

psql -h 127.0.0.1 -p 5432 -U postgres -d shoptest\_qa -f sql/qa\_validation.sql

```



\## Test Results

Record the latest verified UI, API, and SQL results here after running the respective suites.



\## Learning Outcomes

\- Writing and executing automated test cases

\- Validating API responses

\- Testing database integrity using SQL

\- Investigating duplicate records and data inconsistencies

\- Generating and reviewing automated test reports



