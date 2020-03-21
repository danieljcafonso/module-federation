const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002
  },
  output: {
    publicPath: "http://localhost:3002/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"]
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote",
      library: { type: "var", name: "remote" },
      filename: "remoteEntry.js",
      exposes: {
        Table: "./src/CustomTable"
      },
      shared: ["react", "react-dom"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};
