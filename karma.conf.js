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
      'karma-webpack'
    ]
  });
};
