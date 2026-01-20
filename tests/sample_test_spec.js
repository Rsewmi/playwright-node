const { test, expect } = require('@playwright/test');

test('open google.com', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
});