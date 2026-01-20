import {Page, Locator} from '@playwright/test';
import {BasePage} from './base.page';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('data-test="username"');
    this.passwordInput = page.locator('data-test="password"');
    this.loginButton = page.locator('data-test="login-button"');
    this.errorMessage = page.locator('data-test="error"');
  }

  async enterUserName(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }     

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async getErrorMessageText(): Promise<string> {
    return await this.errorMessage.textContent() || '';
  }
}   