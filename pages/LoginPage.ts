import { Page, Locator } from '@playwright/test'

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

    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async loginAsStandardUser(): Promise<void> {
        //! tells TypeScript: “I know this value exists.”
        const username = process.env.STANDARD_USERNAME!;
        const password = process.env.STANDARD_PASSWORD!;

        await this.login(username, password);
    }
    async loginAsVisualUser(): Promise<void> {
        await this.login('visual_user', 'secret_sauce');
    }

}
