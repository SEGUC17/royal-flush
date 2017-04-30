// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

// <<<<<<< HEAD
const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
// <<<<<<< HEAD
  useAllAngular2AppRoots: true,

  beforeLaunch: function() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare() {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
// =======
//   useAllAngular2AppRoots: true,
//   beforeLaunch: function() {
//     require('ts-node').register({
//       project: 'e2e'
//     });
//   },
//   onPrepare: function() {
//     jasmine.getEnv().addReporter(new SpecReporter());
// >>>>>>> f1d3e2d180b4d1a2f1311d8ec95e74d4de216215

  }
};
