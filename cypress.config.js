const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/",
    //specPattern: "cypress/e2e/**/*.cy.js"
    pageLoadTimeout: 120000,
  },
});
