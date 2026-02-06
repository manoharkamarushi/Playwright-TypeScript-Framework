import {expect, test} from '@playwright/test'
import { LoginPage } from '../../pages/LoginPage';
import {InventoryPage} from '../../pages/InventoryPage';

test('user can add product to cart',async({page})=>{
 const loginPage = new LoginPage(page);
 const inventoryPage = new InventoryPage(page);

await loginPage.goto();
await loginPage.loginAsStandardUser();

await inventoryPage.verifyUserIsOnInventoryPage();
await inventoryPage.addProductToCardByName('Sauce Labs Onesie');

const cartCount =await inventoryPage.getCartItemCount();
expect(cartCount).toBe(1);

});