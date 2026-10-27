-- ShopTest QA: Database Validation Tests

-- SQL-001: Check for duplicate customer emails
SELECT email, COUNT(*)
FROM customers
GROUP BY email
HAVING COUNT(*) > 1;

-- SQL-002: Find order total mismatches
SELECT
    o.order_id,
    o.total_amount AS recorded_total,
    SUM(oi.quantity * oi.unit_price) AS calculated_total
FROM orders o
JOIN order_items oi ON oi.order_id = o.order_id
GROUP BY o.order_id, o.total_amount
HAVING o.total_amount <> SUM(oi.quantity * oi.unit_price);

-- SQL-003: Check for invalid product prices or stock
SELECT *
FROM products
WHERE price < 0 OR stock < 0;

-- SQL-004: Count orders by status
SELECT order_status, COUNT(*) AS order_count
FROM orders
GROUP BY order_status
ORDER BY order_status;