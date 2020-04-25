const path = require("path");

module.exports = {
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
  },

  output: {
    path: path.resolve(__dirname, "storybook-static/federation"),
    publicPath: "http://localhost:3030/federation/",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json", ".tsx", ".ts"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: require.resolve("babel-loader"),
      },
    ],
  },

  plugins: [],
};
