const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    baseUrl: "https://ebay.com",
    specPattern: "cypress/e2e/*.feature",
    chromeWebSecurity: false,
  },
});
