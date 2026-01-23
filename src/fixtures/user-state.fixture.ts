import { objectTest } from './objects.fixture';

type UserStateFixture = {
    loggedUser: void;
    userWithItemCart: void;
};

export const stateTest = objectTest.extend<UserStateFixture>({
    loggedUser: async ({loginPage, loginFlow}, use) => {
        await loginPage.navigateToLoginPage();
        await loginFlow.loginWithValidUserCredentials('standard_user', 'secret_sauce');
        await use();
    },

    userWithItemCart: async ({loggedUser, inventoryFlow}, use) => {
        await inventoryFlow.addNthItemToCart(0);
        await use();    
    }
})
 
