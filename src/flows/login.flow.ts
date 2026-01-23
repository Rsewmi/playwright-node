import { LoginPage } from '../pages/login.page';

export class LoginFlow {
    private loginPage: LoginPage;

    constructor(loginPage: LoginPage) {
        this.loginPage = loginPage;
    }

    async loginWithValidUserCredentials(username: string, password: string) {
        await this.loginPage.navigateToLoginPage();
        await this.loginPage.enterUserName(username);
        await this.loginPage.enterPassword(password);
        await this.loginPage.clickLoginButton();
    }

    async loginWithInvalidUserCredentials(username: string, password: string): Promise<string> {
        await this.loginPage.navigateToLoginPage();
        await this.loginPage.enterUserName(username);
        await this.loginPage.enterPassword(password);
        await this.loginPage.clickLoginButton();
        return await this.loginPage.getErrorMessageText();
    }   

    async loginWithEmptyCredentials(): Promise<string> {   
        await this.loginPage.navigateToLoginPage();  
        await this.loginPage.clickLoginButton();
        return await this.loginPage.getErrorMessageText();
    }   
}