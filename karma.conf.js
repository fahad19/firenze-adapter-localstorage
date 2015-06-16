module.exports = function (config) {
  config.set({
    files: [
      'lib/test/cases/*.js',
    ],

    frameworks: ['mocha'],

    preprocessors: {
      '*.js': ['webpack']
    },

    webpack: {

    },

    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-phantomjs-launcher'
    ],

    reporters: ['progress'],

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
