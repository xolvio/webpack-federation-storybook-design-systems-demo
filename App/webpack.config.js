const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  StorybookWebpackFederationPlugin,
} = require("storybook-webpack-federation-plugin");

const path = require("path");

const isLocalFederation = process.env.LOCAL_FEDERATION === "true";

const getAutomaticallyDeployedPath = () => {
  const branchName = process.env.GITHUB_REF.replace("refs/heads/", "")
  return `https://xolvio-ui.s3.amazonaws.com/${branchName}/DesignSystem/federation/`
}

const localLink = {designSystem: "http://localhost:3030/federation/"}
const remoteLink = {designSystem : getAutomaticallyDeployedPath()}


module.exports = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    chunkFilename: "[id].[chunkhash].js",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")],
        },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      ...(isLocalFederation ? localLink : remoteLink)
    }),
    new StorybookWebpackFederationPlugin({
      remotes: ["xolvio_ui"],
    }),
    new StorybookWebpackFederationPlugin({
      remotes: ["xolvio_ui"],
    }),
  ],
};
