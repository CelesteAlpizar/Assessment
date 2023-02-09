const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    user: {
      username: 'standard_user',
      password: 'secret_sauce',
      wrongPassword: 'secret-sauce2',
      firstName: 'Jane',
      lastName: 'Doe',
      postalCode: 11303
    }
  }
});
