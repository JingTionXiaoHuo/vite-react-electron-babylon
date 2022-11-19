const path = require('path');

module.exports = {
  entry: './src/plugin/meshwriter/meshwriter.index.js',
  output: {
    filename: 'meshwriter.js',
    path: path.resolve(__dirname, './src/plugin/meshwriter/dist/')
  },
  mode: 'production',
  optimization: {
  	minimize: false
  }
};
