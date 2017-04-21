// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
// <<<<<<< HEAD
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
// =======
//     frameworks: ['jasmine', 'angular-cli'],
//     plugins: [
//       require('karma-jasmine'),
//       require('karma-chrome-launcher'),
//       require('karma-remap-istanbul'),
//       require('angular-cli/plugins/karma')
//     ],
// >>>>>>> f1d3e2d180b4d1a2f1311d8ec95e74d4de216215
    files: [
      { pattern: './src/test.ts', watched: false }
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']

    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
// <<<<<<< HEAD
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
              ? ['progress', 'coverage-istanbul']
              : ['progress', 'kjhtml'],
// =======
//     remapIstanbulReporter: {
//       reports: {
//         html: 'coverage',
//         lcovonly: './coverage/coverage.lcov'
//       }
//     },
//     angularCli: {
//       config: './angular-cli.json',
//       environment: 'dev'
//     },
//     reporters: config.angularCli && config.angularCli.codeCoverage
//               ? ['progress', 'karma-remap-istanbul']
//               : ['progress'],
// >>>>>>> f1d3e2d180b4d1a2f1311d8ec95e74d4de216215
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
