import { Page, Locator, expect } from '@playwright/test';
import { UserRole } from '../utils/auth/userRoles';
import { credentialsMap } from '../utils/auth/credentialsMap';

export class ProjectPage {
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

}
