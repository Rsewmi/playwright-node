import {test as base} from '@playwright/test';
import {LoginPage} from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

import {LoginFlow} from '../flows/login.flow';
import {InventoryFlow} from '../flows/inventory.flow';

type ObjectsFixture = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    loginFlow: LoginFlow;
    inventoryFlow: InventoryFlow;
};

export const objectTest = base.extend<ObjectsFixture>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    inventoryPage: async ({page}, use) => {
        const inventoryPage = new InventoryPage(page);          
        await use(inventoryPage);
    },

    loginFlow: async ({loginPage}, use) => {
        const loginFlow = new LoginFlow(loginPage);
        await use(loginFlow);
    },
    inventoryFlow: async ({inventoryPage}, use) => {     
        const inventoryFlow = new InventoryFlow(inventoryPage);
        await use(inventoryFlow);
    }
})
