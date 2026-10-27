
const { test, expect } = require("@playwright/test");

async function login(page) {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/inventory\.html/);
}

test("TC-005: Inventory page displays products", async ({ page }) => {
  await login(page);

  await expect(page.getByText("Products", { exact: true })).toBeVisible();
  await expect(page.locator(".inventory_item").first()).toBeVisible();

  const productCount = await page.locator(".inventory_item").count();
  expect(productCount).toBeGreaterThan(0);
});

test("TC-006: Products can be sorted by name A to Z", async ({ page }) => {
  await login(page);

  await page.locator('[data-test="product-sort-container"]')
    .selectOption("az");

  const names = await page.locator(".inventory_item_name")
    .allTextContents();

  const sortedNames = [...names].sort((a, b) => a.localeCompare(b));

  expect(names).toEqual(sortedNames);
});

test("TC-007: Products can be sorted by price low to high", async ({ page }) => {
  await login(page);

  await page.locator('[data-test="product-sort-container"]')
    .selectOption("lohi");

  const prices = await page.locator(".inventory_item_price")
    .allTextContents();

  const numericPrices = prices.map(price =>
    Number(price.replace("$", "").trim())
  );

  expect(numericPrices.length).toBeGreaterThan(0);

  const sortedPrices = [...numericPrices].sort((a, b) => a - b);
  expect(numericPrices).toEqual(sortedPrices);
});

test("TC-008: Adding a product updates the cart", async ({ page }) => {
  await login(page);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click();

  await expect(page.locator(".shopping_cart_badge")).toHaveText("1");

  await page.locator(".shopping_cart_link").click();

  await expect(page.locator(".cart_item")).toHaveCount(1);
  await expect(
    page.getByText("Sauce Labs Backpack", { exact: true })
  ).toBeVisible();
});

test("TC-009: Removing a product empties the cart", async ({ page }) => {
  await login(page);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click();

  await page.locator(".shopping_cart_link").click();

  await expect(page.locator(".cart_item")).toHaveCount(1);

  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

  await expect(page.locator(".cart_item")).toHaveCount(0);
  await expect(page.locator(".shopping_cart_badge")).toHaveCount(0);
});
