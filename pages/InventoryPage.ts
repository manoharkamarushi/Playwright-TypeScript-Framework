import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {

    /**
     * Page Object Model for SauceDemo Products/Inventory Page
     * Handles product listing, selection, and cart operations
     */
    private readonly page: Page;
    //locators
    private readonly inventoryContainer: Locator;
    private readonly inventoryItems: Locator;
    private readonly addToCartButton: Locator;
    private readonly shoppingCartLink: Locator;
    private readonly cartBadge: Locator;


    constructor(page: Page) {
        this.page = page;
        this.inventoryContainer = page.locator('.inventory_list');
        this.inventoryItems = page.locator('.inventory_item')
        this.addToCartButton = page.locator('button[data-test^="add-to-cart"]');
        this.shoppingCartLink = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
    }

    /* ---------- Page-level validations ---------- */
    async verifyUserIsOnInventoryPage(): Promise<void> {
        await expect(this.page).toHaveURL(/inventory/);
        await expect(this.inventoryContainer).toBeVisible();
    }

    async getProductCount(productName: String): Promise<number> {
        return await this.inventoryItems.count();
    }
    /* ---------- Product actions ---------- */

    async addProductToCartByIndex(index: number): Promise<void>{
        await this.addToCartButton.nth(index).click();
    }

    async addProductToCardByName(productName: string): Promise<void>{
        const product = this.page.locator('.inventory_item').filter({hasText:productName});
        await product.locator('button').click();
    }

    async openCart(): Promise<void>{
        await this.shoppingCartLink.click();
    }

    async getCartItemCount():Promise<number>{
        if(await this.cartBadge.isVisible()){
            return Number(await this.cartBadge.textContent());
        }
        return 0;
    }
}