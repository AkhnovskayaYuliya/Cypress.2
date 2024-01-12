const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qamid.tmweb.ru/admin/",
    retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
