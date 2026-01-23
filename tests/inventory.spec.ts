import { test, expect } from '../src/fixtures';

test.describe('Inventory Tests', () => {
    test('Add Item to Cart Test', async ({loggedUser, inventoryFlow, page}) => {
        let itemNumber: number = await inventoryFlow.getShoppingCartCount();
        await inventoryFlow.addNthItemToCart(0);
        let newItemNumber = await inventoryFlow.getShoppingCartCount();
        expect(newItemNumber).toEqual(itemNumber+1);
    });

    test('Remove Item from Cart Test', async ({userWithItemCart,inventoryFlow}) => {
        let itemNumber: number = await inventoryFlow.getShoppingCartCount();
        await inventoryFlow.removeNthItemFromCart(0);
        let newItemNumber = await inventoryFlow.getShoppingCartCount();
        expect(itemNumber-1).toEqual(newItemNumber);
    });
});