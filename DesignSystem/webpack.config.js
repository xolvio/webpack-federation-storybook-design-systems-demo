const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

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
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "xolviods",
      library: { type: "var", name: "xolviods" },
      filename: "remoteEntry.js",
      exposes: {
        Text: "./src/text.ts",
      },
      shared: [],
    }),
  ],
};
