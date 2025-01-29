const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: '/renderer/index.jsx',
    alert: '/renderer/alert.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'alert.html',
      template: './ui/alert/alert.html',
      chunks: ['alert']
    })
  ],
  
  devServer: {
    static: path.join(__dirname, 'dist'),
    hot: true,
  },
};
