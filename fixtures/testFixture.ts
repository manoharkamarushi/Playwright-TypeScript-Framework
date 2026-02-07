//Goal : Create a custom fixture and export it
import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {InventoryPage} from '../pages/InventoryPage';
//pw provides a test function and we renamed it because
//we are going to extend it


type MyFixtures ={
    loginPage : LoginPage; 
    inventoryPage: InventoryPage;
};

//“We extend Playwright’s base test to add custom fixtures.”
export const test = base.extend<MyFixtures>({
    loginPage : async ({page}, use) => { //login fixture
        const loginPage = new LoginPage(page);
        
        await use(loginPage);
    },

    inventoryPage: async({page}, use)=>{ //inventory fixture
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.loginwithEnvCrendentials();
        await inventoryPage.verifyUserIsOnInventoryPage();

        await use(inventoryPage);
    },
});

export {expect} from '@playwright/test';