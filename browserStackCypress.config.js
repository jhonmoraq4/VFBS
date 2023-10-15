const { defineConfig } = require("cypress");
//const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  watchForFileChanges: true,
  experimentalWebKitSupport: true,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporterConfig.json",
  },

  e2e: {
    setupNodeEvents(on, config) {
      //on("file:preprocessor", cucumber());
    },
    specPattern: "cypress/e2e/**/*.*",
    baseUrl: "https://test414.staging.factor.work/login",
    chromeWebSecurity: false,
    excludeSpecPattern: ["*.ts"],
  },
});
