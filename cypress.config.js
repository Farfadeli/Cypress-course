const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    excludeSpecPattern: 
    ["**/example/1-getting-started/*.cy.js",
    "**/example/2-advanced-examples/*.cy.js"],
    setupNodeEvents(on, config) {
      
    },
  },
});
