import { test, expect } from '../../fixtures/testFixture';
import { dbPool } from '../../utils/db/dbclient';
import { getInventoryByName } from '../../utils/db/repository';


test.describe('DB Validation Test', () => {
    test('Validate DB entry @regression @inventory @US-3001', async ({ inventoryPage, dbQuery }) => {

        const itemName = 'Item123';
        await inventoryPage.createItem(itemName);
        const record = await getInventoryByName(itemName);
        expect(record.length).toBe(1);

    });

});