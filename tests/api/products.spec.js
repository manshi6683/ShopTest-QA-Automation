
const { test, expect } = require("@playwright/test");

const API_URL = "https://fakestoreapi.com";

test("API-001: Get all products", async ({ request }) => {
  const response = await request.get(`${API_URL}/products`);

  expect(response.status()).toBe(200);

  const products = await response.json();
  expect(Array.isArray(products)).toBe(true);

  if (products.length > 0) {
    expect(typeof products[0].id).toBe("number");
    expect(typeof products[0].title).toBe("string");
    expect(typeof products[0].price).toBe("number");
  }
});

test("API-002: Get a single product", async ({ request }) => {
  const response = await request.get(`${API_URL}/products/1`);

  expect(response.status()).toBe(200);

  const product = await response.json();

  expect(product.id).toBe(1);
  expect(typeof product.title).toBe("string");
  expect(typeof product.price).toBe("number");
  expect(product.price).toBeGreaterThanOrEqual(0);
});

test("API-003: Get product categories", async ({ request }) => {
  const response = await request.get(
    `${API_URL}/products/categories`
  );

  expect(response.status()).toBe(200);

  const categories = await response.json();
  expect(Array.isArray(categories)).toBe(true);
});

test("API-004: Limit products to five", async ({ request }) => {
  const response = await request.get(
    `${API_URL}/products?limit=5`
  );

  expect(response.status()).toBe(200);

  const products = await response.json();

  expect(Array.isArray(products)).toBe(true);
  expect(products.length).toBeLessThanOrEqual(5);
});
