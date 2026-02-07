/*
import { expect, test } from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';


test.describe('Inventor page tests', () => {
      let inventoryPage: InventoryPage;
//LoginPage is only required for setup inside the hook, while InventoryPage is reused across tests, 
//so we keep variables scoped to where they’re needed

//This way we avoid promoting variables to wider scope unliess they are required.
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.loginwithEnvCrendentials();
        await inventoryPage.verifyUserIsOnInventoryPage();
    });

    test('user can add product to cart', async ({ page }) => {

        await inventoryPage.addProductToCardByName('Sauce Labs Onesie');
        const cartCount = await inventoryPage.getCartItemCount();
        expect(cartCount).toBe(1);

    });
    test('User can see all products after login', async ({ page }) => {
        const productCount = await inventoryPage.getProductCount();
        expect(productCount).toBeGreaterThan(0);
    });

    test.afterEach(async({page}, testInfo)=>{
        if(testInfo.status !== testInfo.expectedStatus){
            console.log('Test Failed: ${testInfo.title}');
        }
    });

});

*/