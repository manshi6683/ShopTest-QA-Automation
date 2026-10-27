
const { test, expect } = require("@playwright/test");

async function loginAndAddProduct(page) {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/inventory\.html/);

  await page
    .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    .click();

  await page.locator(".shopping_cart_link").click();

  await expect(page.locator(".cart_item")).toHaveCount(1);

  await page.getByRole("button", { name: "Checkout" }).click();
}

async function fillCustomerDetails(page) {
  await page.getByPlaceholder("First Name").fill("QA");
  await page.getByPlaceholder("Last Name").fill("Tester");
  await page.getByPlaceholder("Zip/Postal Code").fill("302001");
}

test("TC-010: Complete checkout successfully", async ({ page }) => {
  await loginAndAddProduct(page);
  await fillCustomerDetails(page);

  await page.getByRole("button", { name: "Continue" }).click();

  await expect(page).toHaveURL(/checkout-step-two\.html/);
  await expect(page.locator(".cart_item")).toHaveCount(1);
  await expect(
    page.getByText("Sauce Labs Backpack", { exact: true })
  ).toBeVisible();

  await expect(page.locator(".summary_subtotal_label")).toBeVisible();
  await expect(page.locator(".summary_total_label")).toBeVisible();

  await page.getByRole("button", { name: "Finish" }).click();

  await expect(page).toHaveURL(/checkout-complete\.html/);
  await expect(
    page.getByText("Thank you for your order!")
  ).toBeVisible();
});

test("TC-011: Checkout rejects missing first name", async ({ page }) => {
  await loginAndAddProduct(page);

  await page.getByPlaceholder("Last Name").fill("Tester");
  await page.getByPlaceholder("Zip/Postal Code").fill("302001");

  await page.getByRole("button", { name: "Continue" }).click();

  const error = page.locator('[data-test="error"]');

  await expect(error).toBeVisible();
  await expect(error).toContainText("First Name is required");
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});

test("TC-012: Checkout rejects missing last name", async ({ page }) => {
  await loginAndAddProduct(page);

  await page.getByPlaceholder("First Name").fill("QA");
  await page.getByPlaceholder("Zip/Postal Code").fill("302001");

  await page.getByRole("button", { name: "Continue" }).click();

  const error = page.locator('[data-test="error"]');

  await expect(error).toBeVisible();
  await expect(error).toContainText("Last Name is required");
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});

test("TC-013: Checkout rejects missing postal code", async ({ page }) => {
  await loginAndAddProduct(page);

  await page.getByPlaceholder("First Name").fill("QA");
  await page.getByPlaceholder("Last Name").fill("Tester");

  await page.getByRole("button", { name: "Continue" }).click();

  const error = page.locator('[data-test="error"]');

  await expect(error).toBeVisible();
  await expect(error).toContainText("Postal Code is required");
  await expect(page).toHaveURL(/checkout-step-one\.html/);
});

test("TC-014: Cancel checkout returns to the cart", async ({ page }) => {
  await loginAndAddProduct(page);

  await page.getByRole("button", { name: "Cancel" }).click();

  await expect(page).toHaveURL(/cart\.html/);
  await expect(page.locator(".cart_item")).toHaveCount(1);
  await expect(
    page.getByText("Sauce Labs Backpack", { exact: true })
  ).toBeVisible();
});
