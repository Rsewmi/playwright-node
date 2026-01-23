import { InventoryPage } from '../pages/inventory.page';

export class InventoryFlow {
    private inventoryPage: InventoryPage;

    constructor(inventoryPage: InventoryPage) {
        this.inventoryPage = inventoryPage;
    }

    async addNthItemToCart(n: number) : Promise<string>{
        await this.inventoryPage.clickAddToCartForNthItem(n);
        return await this.inventoryPage.getItemNameForNthItem(n);
    }

    async removeNthItemFromCart(n: number) : Promise<void>{
        await this.inventoryPage.clickRemoveItemForNthItem(n);
    }

    async getShoppingCartCount(): Promise<number> {
        if(await this.inventoryPage.isItemPresentInCart()){
            return await this.inventoryPage.getShoppingCartBatchCount();
        }
        return 0;
    }   
}

