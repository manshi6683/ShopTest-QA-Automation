
const { test, expect } = require("@playwright/test");

test("TC-001: Valid login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.getByText("Products", { exact: true })).toBeVisible();
});

test("TC-002: Invalid password is rejected", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("wrong_password");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page).not.toHaveURL(/inventory\.html/);
});

test("TC-003: Empty login is rejected", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page).not.toHaveURL(/inventory\.html/);
});

test("TC-004: User can log out", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/inventory\.html/);

  await page.locator("#react-burger-menu-btn").click();

  const logoutLink = page.locator('[data-test="logout-sidebar-link"]');
  await expect(logoutLink).toBeVisible();
  await logoutLink.click();

  await expect(page.getByPlaceholder("Username")).toBeVisible();
  await expect(page.getByPlaceholder("Password")).toBeVisible();
});
