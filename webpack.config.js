const path = require('path');

module.exports = [
  // Minified version
  {
    entry: './index.js',
    output: {
      filename: 'meshwriter.min.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    optimization: {
      minimize: true
    }
  },
  // Unminified version
  {
    entry: './index.js',
    output: {
      filename: 'meshwriter.js',
      path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    optimization: {
      minimize: false
    }
  }
];
