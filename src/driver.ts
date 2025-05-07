import { Builder, WebDriver } from "selenium-webdriver";

export function getDriver() {
    const capabilities = {  
        browserName: 'chrome',
        acceptInsecureCerts: true,   
        enableVNC: true,  
        enableVideo: false,  
        'goog:chromeOptions': {  
            args: [  
                '--no-sandbox',   
                '--disable-dev-shm-usage',   
                '--enable-automation',   
                '--disable-extensions',   
                '--disable-client-side-phishing-detection',   
                '--no-default-browser-check',   
                '--no-first-run'   
            ]
        }  
    };

    let driver: WebDriver;

    try {
        driver = new Builder()
            .usingServer('http://localhost:4444/wd/hub') // URL of the Selenium server
            //.forBrowser('chrome')
            .withCapabilities(capabilities)  
            .build();
    }

    catch (error) {
        console.error('Error creating WebDriver instance:', error);
    };

    return driver;
}

