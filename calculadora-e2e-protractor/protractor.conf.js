const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  capabilities: {
    'browserName': 'chrome'
  },
  specs: [
    './e2e/features/**/*.feature'
  ],
  // directConnect: true,
  // seleniumAddress: 'http://alb-selenium-1470009107.us-east-1.elb.amazonaws.com',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:4200',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./e2e/features/**/**.ts'],
    // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    tags: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    format: [
      'json:e2e/reports/summary.json'
    ],

    dryRun: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    compiler: []
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    setTimeout(() => browser.driver.manage().window().maximize());
    // setTimeout(function() {
    //     browser.driver.executeScript(function() {
    //         return {
    //             width: window.screen.availWidth,
    //             height: window.screen.availHeight
    //         };
    //     }).then(function(result) {
    //         browser.driver.manage().window().setSize(result.width, result.height);
    //     });
    // });
  }
};
