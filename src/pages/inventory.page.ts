import {Page, Locator, expect} from '@playwright/test';

export class InventoryPage {
    readonly inventoryItem: Locator;
    readonly addToCartButton: Locator;
    readonly shoppingCartLink: Locator;
    readonly shoppingCartBatch: Locator;
    readonly removeItemButton: Locator;
    readonly itemName: Locator;
    readonly itemPrice: Locator;

    constructor(page: Page) {
        this.inventoryItem = page.locator('.inventory_item');
        this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.removeItemButton = page.locator('[data-test="remove-sauce-labs-backpack"]'); 
        this.shoppingCartLink = page.locator('[id="shopping_cart_container"]');
        this.itemName = page.locator('[data-test="inventory-item-name"]');
        this.itemPrice = page.locator('[data-test="inventory-item-price"]');
        this.shoppingCartBatch = page.locator('.shopping_cart_badge');
    }

    async navigateToInventoryPage(page: Page) {
        await page.goto('/inventory.html');
    }

    async clickAddToCartForNthItem(n: number) {
        const addToCartButtonForNthItem = this.inventoryItem.nth(n).locator(this.addToCartButton);
        await addToCartButtonForNthItem.click();
        await expect(this.shoppingCartBatch).toBeVisible();
    }

    async clickShoppingCartLink() {
        await this.shoppingCartLink.click();
    }

    async clickRemoveItemForNthItem(n: number) {
        const removeItemButtonForNthItem = this.inventoryItem.nth(n).locator(this.removeItemButton);
        await removeItemButtonForNthItem.click();
    }

    async getItemNameForNthItem(n: number): Promise<string> {
        const itemNameForNthItem = this.inventoryItem.nth(n).locator(this.itemName);
        return await itemNameForNthItem.textContent() || '';
    }

    async getItemPriceForNthItem(n: number): Promise<string> {
        const itemPriceForNthItem = this.inventoryItem.nth(n).locator(this.itemPrice);
        return await itemPriceForNthItem.textContent() || '';
    }

    async getShoppingCartBatchCount(): Promise<number> {
        const batchText = await this.shoppingCartBatch.textContent();
        return batchText ? parseInt(batchText) : 0;
    }

    async isItemPresentInCart(): Promise<boolean> {
        const xxx:boolean = await this.shoppingCartBatch.isVisible()
        return xxx;
    }
}