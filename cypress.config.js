const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { downloadFile });
      return config;
    },
    downloadsFolder: 'cypress/downloads',
    supportFile: 'cypress/support/e2e.js', // ensure this path is correct
    baseUrl: 'http://localhost:3000'
  },
});
