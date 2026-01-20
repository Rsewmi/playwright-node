import {Page, Locator} from '@playwright/test';
import {BasePage} from './base.page';

export class InventoryPage extends BasePage {
    readonly inventoryItem: Locator;
    readonly addToCartButton: Locator;
    readonly shoppingCartLink: Locator
    readonly removeItemButton: Locator;
    readonly itemName: Locator;
    readonly itemPrice: Locator;

    constructor(page: Page) {
        super(page);
        this.inventoryItem = page.locator('.inventory_item');
        this.addToCartButton = page.locator('data-test="add-to-cart-sauce-labs-backpack"');
        this.removeItemButton = page.locator('data-test="remove-sauce-labs-backpack"'); 
        this.shoppingCartLink = page.locator('id="shopping_cart_container"');
        this.itemName = page.locator('data-test="inventory-item-name"');
        this.itemPrice = page.locator('data-test="inventory-item-price"');
    }

    async clickAddToCartForNthItem(n: number) {
        const addToCartButtonForNthItem = this.inventoryItem.nth(n).locator(this.addToCartButton);
        await addToCartButtonForNthItem.click();
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
}