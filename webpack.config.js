const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js',
    clean: true,
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: ['index.html', 'style.css', 'favicon.svg'] }),
  ],
};
