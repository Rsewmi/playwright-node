import { LoginFlow } from "../src/flows/login.flow";
import { LoginPage } from "../src/pages/login.page";
import {users}  from '../src/data/user.data';
import { test, expect } from "@playwright/test";

test.describe("Login Tests", () => {
  let loginPage: LoginPage;
  let loginFlow: LoginFlow;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    loginFlow = new LoginFlow(loginPage);
  });

  test("Valid Login Test", async ({ page }) => {
    await loginFlow.loginWithValidUserCredentials(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  test("Invalid Login Test", async ({ page }) => {
    const errorMessage = await loginFlow.loginWithInvalidUserCredentials(users.invalid.username, users.invalid.password);
    expect(errorMessage).toContain("Username and password do not match any user in this service");
  });

  test("Empty Credentials Login Test", async ({ page }) => {
    const errorMessage = await loginFlow.loginWithEmptyCredentials();
    expect(errorMessage).toContain("Username is required");
  });
});