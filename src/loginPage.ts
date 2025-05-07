import { By, until, WebDriver } from "selenium-webdriver";
import { SitePage } from "./sitePage";

export class LoginPage {
    private driver: WebDriver;
    private usernameField: By;
    private loginButton: By;

    constructor(driver: WebDriver) {
        this.driver = driver;
        this.usernameField = By.css('input[id="loginInput"]');
        this.loginButton = By.css('button[id="submitButton"]');
    }

    async open() {
        await this.driver.get('url_placeholder');
        await this.driver.manage().window().maximize();
        await this.driver.wait(until.elementLocated(this.usernameField), 10000);
    }

    async login(username: string) {
        await this.driver.findElement(this.usernameField).sendKeys(username);
        await this.driver.findElement(this.loginButton).click();

        return new SitePage(this.driver);
    }
}
