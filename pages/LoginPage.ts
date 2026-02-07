import { Page, Locator, expect } from '@playwright/test';
import { UserRole } from '../utils/auth/userRoles';
import { credentialsMap } from '../utils/auth/credentialsMap';

export class LoginPage {
    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');

    }

    async goto(): Promise<void> {
        await this.page.goto('/');
    }

   // Low-level action (NO role logic)
  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  //  Role-based login (uses mapping)
  async loginAs(role: UserRole): Promise<void> {
    const { username, password } = credentialsMap[role];
    await this.login(username, password);
  }

    async verifyLoginSuccessful(): Promise<void> {
        await expect(this.page).toHaveURL(/inventory/);
    }

}
