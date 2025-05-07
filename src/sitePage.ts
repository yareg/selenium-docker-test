import { By, until, WebDriver } from "selenium-webdriver";

export class SitePage {
    private driver: WebDriver;
    private siteField: By;

    constructor(driver: WebDriver) {
        this.driver = driver;
        this.siteField = By.css('div:nth-child(7) > div.csf-table-cell.csf-table-col--site');
    }

    async selectSite() {
        await this.driver.wait(until.elementLocated(this.siteField), 10000);
        await this.driver.findElement(this.siteField).click();
    }
}