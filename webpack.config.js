const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: ["./src/app.js", "./src/scss/main.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "/dist"
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: "SpartanCSS.io",
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: 'css/'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};