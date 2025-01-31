const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: '/renderer/index.tsx',
    alert: '/renderer/alert.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
                "@babel/preset-typescript",
                "@babel/preset-env",
            ]
        }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
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
