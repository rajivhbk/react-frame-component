const webpack = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    noParse: [
      /node_modules\/sinon/,
    ],
    loaders: [
      { test: /\.js(x|)$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
};

module.exports = function configure(config) {
  config.set({
    basePath: '',
    files: [
      { pattern: 'test/**/*.spec.js*', watched: true },
    ],
    preprocessors: {
      'test/**/*.spec.js*': ['webpack', 'sourcemap'],
    },
    webpack,
    frameworks: ['mocha'],
    reporters: ['progress', 'osx'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Electron'],
  });
};
