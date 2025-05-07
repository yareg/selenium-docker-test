import { getDriver } from '../driver';
import { LoginPage } from '../loginPage';
import { SitePage } from '../sitePage';
import { WebDriver } from 'selenium-webdriver';

let driver: WebDriver;
let loginPage: LoginPage;
let sitePage: SitePage;

describe('Test Case 1', () => {
    beforeAll(async () => {
        driver = getDriver();
    });

    it('Login to app', async () => {
        loginPage = new LoginPage(driver);
        await loginPage.open();
        sitePage = await loginPage.login('scc');
    });

    it('Select site', async () => {
        await sitePage.selectSite();
        await driver.sleep(10000); // Wait for 10 seconds to observe the selected site
    });

    afterAll(async () => {
        await driver.quit();
    });
});