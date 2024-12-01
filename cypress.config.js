const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

dotenv.config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //load dotenv variables
      config.env.BASE_URL = process.env.BASE_URL;
      config.env.USER_NAME = process.env.USER_NAME;
      config.env.PASSWORD = process.env.PASSWORD;
      return config;
    },
    //baseUrl: "https://www.saucedemo.com/",
    //specPattern: "cypress/e2e/**/*.cy.js"
    pageLoadTimeout: 60000,
  },
});
