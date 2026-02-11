
import {test, expect} from '../../fixtures/testFixture'

test.use({ role: 'champuser' });
test.describe('@regression @inventory @p2 @ui Inventory page tests', () => {

    test('user can add product to cart', async ({ inventoryPage }) => {

        await inventoryPage.addProductToCardByName('Sauce Labs Onesie');
        const cartCount = await inventoryPage.getCartItemCount();
        expect(cartCount).toBe(1);

    });
    test('User can see all products after login', async ({ inventoryPage }) => {
        const productCount = await inventoryPage.getProductCount();
        expect(productCount).toBeGreaterThan(0);
    });

    test.afterEach(async({}, testInfo)=>{
        if(testInfo.status !== testInfo.expectedStatus){
            console.log('Test Failed: ${testInfo.title}');
        }
    });

});
