const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x6hghq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      testFiles: [
        '**/00 - Live Page Test.cy.js',  // Runs this file first
        '**/*',                    // Then all the other files in the folder
      ]
    },
  },
});
