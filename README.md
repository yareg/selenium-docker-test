### Demo app for [issue](https://github.com/SeleniumHQ/selenium/issues/15699)

#### Run
- npm i
- npx tsc
- node ./.dist/src/index.js

The behavior has been tested with Selenium Grid, launched in Docker:

```
---
services:
  chrome:
    image: selenium/node-chrome:latest
    platform: "linux/amd64/v2"
    shm_size: 2gb
    depends_on:
      - selenium-hub
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_NODE_MAX_SESSIONS=10
      - SE_NODE_OVERRIDE_MAX_SESSIONS=true
    restart: unless-stopped

  selenium-hub:
    image: selenium/hub:latest
    platform: "linux/amd64/v2"
    container_name: selenium-hub
    environment:
      - SE_NODE_MAX_SESSIONS=10
      - SE_NODE_OVERRIDE_MAX_SESSIONS=true
    ports:
      - "4442:4442"
      - "4443:4443"
      - "4444:4444"
    restart: unless-stopped
```

after that replaced real server address with placeholder in src/loginPage.ts file
