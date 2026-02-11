import { test, expect } from '../../fixtures/testFixture';
import { storageStateMap } from '../../utils/auth/storageStateMap';
import { InventoryPage } from '../../pages/InventoryPage';

//use test.user({role:}) for independent tests
//for multi user workflow E2E tests follow below

// We execute the entire approval journey inside 
// a single Playwright test while switching roles via isolated browser contexts using stored authentication states.”

test.describe('@e2e @approval @US-2045', () => {
    test('J&A approval end-to-end flow (champ → approvers → champ)', async ({ browser }) => {

        // -------------------------------
        // STEP 1: Champ user creates & submits
        // -------------------------------
        const champContext = await browser.newContext({
            storageState: storageStateMap['champuser'],
        });
        const champPage = await champContext.newPage();
        const champInventory = new InventoryPage(champPage);

        await champInventory.verifyUserIsOnInventoryPage();
        await champInventory.addProductToCardByName('Sauce Labs Onesie');

        const cartCount = await champInventory.getCartItemCount();
        expect(cartCount).toBe(1);

        // imagine: submit J&A for approval here
        await champContext.close();


        // -------------------------------
        // STEP 2: Approver 1 (standarduser)
        // -------------------------------
        const approver1Context = await browser.newContext({
            storageState: storageStateMap['standarduser'],
        });
        const approver1Page = await approver1Context.newPage();
        const approver1Inventory = new InventoryPage(approver1Page);

        await approver1Inventory.verifyUserIsOnInventoryPage();
        // imagine: navigate to My Actions → Approve
        await approver1Context.close();


        // -------------------------------
        // STEP 3: Approver 2 (poweruser)
        // -------------------------------
        const approver2Context = await browser.newContext({
            storageState: storageStateMap['poweruser'],
        });
        const approver2Page = await approver2Context.newPage();
        const approver2Inventory = new InventoryPage(approver2Page);

        await approver2Inventory.verifyUserIsOnInventoryPage();
        // imagine: approve request
        await approver2Context.close();


        // -------------------------------
        // STEP 4: Champ verifies final status
        // -------------------------------
        const champFinalContext = await browser.newContext({  //its just handles login
            storageState: storageStateMap['champuser'],
        });
        const champFinalPage = await champFinalContext.newPage();
        const champFinalInventory = new InventoryPage(champFinalPage);

        await champFinalInventory.verifyUserIsOnInventoryPage(); // take the flow as required
        // imagine: verify approval completed
        await champFinalContext.close();
    });
});