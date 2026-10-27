\# ShopTest — QA Bug Report



\## Purpose

This document records defects or data-quality issues identified during ShopTest testing. Findings must be reproduced before being reported as confirmed product defects.



\## Bug Report Template



| Field | Details |

|---|---|

| Bug ID | BUG-001 |

| Title | Short, descriptive defect title |

| Module | UI / API / Database |

| Environment | OS, browser, application or API version |

| Preconditions | Required setup before reproducing |

| Steps to Reproduce | Numbered steps to trigger the issue |

| Expected Result | Correct expected behaviour |

| Actual Result | Observed behaviour |

| Severity | Critical / High / Medium / Low |

| Priority | P1 / P2 / P3 / P4 |

| Status | New / Open / In Progress / Fixed / Retested |

| Evidence | Screenshot, log, response, or SQL output |



\## Finding 1 — Duplicate Order Records in Test Data



\*\*ID:\*\* DATA-001



\*\*Module:\*\* Database



\*\*Environment:\*\* Local PostgreSQL 18.4, `shoptest\_qa` database



\*\*Observation:\*\* Two pairs of orders with identical customer, status, and total values were found in the sample dataset.



\*\*Likely cause:\*\* The sample order insertion command was executed more than once.



\*\*Expected result:\*\* The sample dataset should contain only the intended orders.



\*\*Actual result:\*\* Four orders were present when two were expected.



\*\*Resolution:\*\* Duplicate sample records were reviewed and cleaned up. Subsequent status-count validation showed one `CONFIRMED` order and one `PENDING` order.



\*\*Classification:\*\* Test-data setup issue, not a confirmed application defect.



\## Execution Notes



\- Add only reproducible findings.

\- Attach evidence where available.

\- Do not report a suspected cause as confirmed without investigation.

\- Record retest results after a fix.



