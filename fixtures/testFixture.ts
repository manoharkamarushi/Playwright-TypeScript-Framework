//Goal : Create a custom fixture and export it
import { test as base, BrowserContext } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { UserRole } from '../utils/auth/userRoles';
import { credentialsMap } from '../utils/auth/credentialsMap';
import { storageStateMap } from '../utils/auth/storageStateMap';

type MyFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    role: UserRole;
};

//“We extend Playwright’s base test to add custom fixtures.”
export const test = base.extend<MyFixtures>({

    // default role (can be overridden per test)
    role: ['champuser', { option: true }],

    loginPage: async ({ page }, use) => { //login fixture
        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    inventoryPage: async ({ browser, role }, use) => {//inventory fixture
        const context: BrowserContext = await browser.newContext({
            storageState: storageStateMap[role],
        });

        const page = await context.newPage();
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.verifyUserIsOnInventoryPage();
        await use(inventoryPage);

        await context.close();
    },
});

export { expect } from '@playwright/test';