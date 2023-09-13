process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  "use strict";
  config.set({

    frameworks: ['ui5'],
    reporters: ["progress"],

    browsers: ["Chrome_without_security"],
    
    customLaunchers: {
      Chrome_without_security: {
         base: 'ChromeHeadless',
         flags: ['--disable-web-security', '--no-sandbox']
      }
    },
    singleRun: true

  });
};
