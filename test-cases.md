\# ShopTest — Test Case Documentation



\## 1. UI Test Cases



| Test Case ID | Scenario | Expected Result | Automation Status |

|---|---|---|---|

| TC-001 | Login with valid credentials | User logs in successfully | Automated |

| TC-002 | Login with invalid password | Error message is displayed | Automated |

| TC-003 | Submit login form empty | Validation prevents login | Automated |

| TC-004 | Logout | User returns to login page | Automated |

| TC-005 | Inventory page loads | Product list is displayed | Automated |

| TC-006 | Sort products A–Z | Products appear alphabetically | Automated |

| TC-007 | Sort price low–high | Prices are sorted ascending | Automated |

| TC-008 | Add product to cart | Cart count increases | Automated |

| TC-009 | Remove product from cart | Product is removed | Automated |

| TC-010 | Complete checkout | Order confirmation is displayed | Automated |

| TC-011 | Checkout without first name | Validation error is displayed | Automated |

| TC-012 | Checkout without last name | Validation error is displayed | Automated |

| TC-013 | Checkout without postal code | Validation error is displayed | Automated |

| TC-014 | Cancel checkout | User returns to inventory | Automated |



\## 2. API Test Cases



| Test Case ID | Scenario | Expected Result | Automation Status |

|---|---|---|---|

| API-001 | Retrieve all products | Successful response with product data | Automated |

| API-002 | Retrieve a single product | Correct product details returned | Automated |

| API-003 | Retrieve product categories | Categories returned successfully | Automated |

| API-004 | Limit response to five products | No more than five products returned | Automated |



\## 3. SQL Validation Test Cases



| Test Case ID | Scenario | Expected Result |

|---|---|---|

| SQL-001 | Find duplicate customer emails | Query returns zero duplicate groups |

| SQL-002 | Compare recorded and calculated order totals | Query returns zero mismatches |

| SQL-003 | Find negative product prices or stock | Query returns zero invalid records |

| SQL-004 | Count orders by status | Counts match the expected sample dataset |



\## 4. Execution Notes



\- UI and API automation use Playwright Test.

\- API tests use the Fake Store API.

\- SQL validation uses a separate local PostgreSQL test database named `shoptest\_qa`.

\- UI, API, and SQL suites are executed separately.

\- Record the execution date, actual result, and evidence for each test run.

\- A test should be marked Passed only after its latest execution has been verified.



