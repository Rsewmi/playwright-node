import { objectTest } from './objects.fixture';
import {users} from '../data/user.data';

type UserStateFixture = {
    loggedUser: void;
    userWithItemCart: void;
};

export const stateTest = objectTest.extend<UserStateFixture>({
    loggedUser: async ({loginPage, loginFlow}, use) => {
        await loginPage.navigateToLoginPage();
        await loginFlow.loginWithValidUserCredentials(users.standard.username, users.standard.password);
        await use();
    },

    userWithItemCart: async ({loggedUser, inventoryFlow}, use) => {
        await inventoryFlow.addNthItemToCart(0);
        await use();    
    }
})
 
