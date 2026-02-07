
import {test, expect} from '../../fixtures/testFixture'


test.describe('Inventor page tests', () => {

    test.skip('user can add product to cart', async ({ inventoryPage }) => {

        await inventoryPage.addProductToCardByName('Sauce Labs Onesie');
        const cartCount = await inventoryPage.getCartItemCount();
        expect(cartCount).toBe(1);

    });
    test.skip('User can see all products after login', async ({ inventoryPage }) => {
        const productCount = await inventoryPage.getProductCount();
        expect(productCount).toBeGreaterThan(0);
    });

    test.afterEach(async({inventoryPage}, testInfo)=>{
        if(testInfo.status !== testInfo.expectedStatus){
            console.log('Test Failed: ${testInfo.title}');
        }
    });

});
