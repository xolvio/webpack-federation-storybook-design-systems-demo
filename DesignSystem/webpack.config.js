const path = require("path");
const {
  StorybookWebpackFederationPlugin,
} = require("storybook-webpack-federation-plugin");

module.exports = {
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false,
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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, "storybook-static/federation"),
    publicPath: "http://localhost:3030/federation/",
  },

  plugins: [
    new StorybookWebpackFederationPlugin({
      name: "xolvio_ui",
      files: {
        paths: ["./src/**/*.ts{,x}"],
      },
    }),
  ],
};
