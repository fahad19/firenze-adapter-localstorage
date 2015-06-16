var path = require('path');

module.exports = function (config) {
  config.set({
    files: [
      'dist/test.js',
    ],

    frameworks: ['mocha'],

    preprocessors: {},

    plugins: [
      'karma-mocha',
      'karma-phantomjs-launcher'
    ],

    reporters: ['progress'],

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
