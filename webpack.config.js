const path = require("path");
const slsw = require("serverless-webpack");
const nodeExternals = require("webpack-node-externals");

const entries = {};

Object.keys(slsw.lib.entries).forEach(
  key => (entries[key] = ["./source-map-install.js", slsw.lib.entries[key]])
);

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  },
  entry: entries,
  devtool: "source-map",
  resolve: {
    extensions: [".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"]
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js"
  },
  target: "node",
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
      {
        type: "javascript/auto",
        test: /\.mjs$/,
        use: []
      }
    ]
  }
};
