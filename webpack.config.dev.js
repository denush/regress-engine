const path = require("path");

module.exports = {
  mode: "development",
  entry: "./demo/src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "demo/dist"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.ts$/,
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "demo/dist"),
    },
  },
};
