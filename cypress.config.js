const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'x6hghq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
