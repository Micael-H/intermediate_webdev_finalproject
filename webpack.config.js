const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/index.html',
          to: 'index.html',
          transform: (content) => content.toString().replace('src="./script.js"', 'src="./main.js"'),
        },
        { from: 'src/style.css', to: 'style.css' },
        { from: 'src/favicon.ico', to: 'favicon.ico' },
      ],
    }),
  ],
};
