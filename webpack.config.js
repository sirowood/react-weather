const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config({ path: './.env' });

module.exports = {
  entry: './src/index.js', // This is also the default value
  mode: "production", // This is also the default value
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js', // This is also the default value
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.DefinePlugin({ // This makes the dotenv works
      "process.env": JSON.stringify(process.env)
    }),
  ],
};
