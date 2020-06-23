module.exports = function(config) {
  'use strict';
  config.set({
    basePath: '',
    plugins: [
      require('karma-jasmine'),
    ],
    frameworks: ['jasmine'],
    files: [
    ],
    port: 9876,
    logLevel: config.LOG_INFO,
    browsers: [],
    singleRun: true,
  });
};
