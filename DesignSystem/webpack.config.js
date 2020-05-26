const path = require("path");
const {
  StorybookWebpackFederationPlugin,
} = require("storybook-webpack-federation-plugin");

const isLocalFederation = process.env.LOCAL_FEDERATION === "true";

const getAutomaticallyDeployedPath = () => {
  const branchName = process.env.GITHUB_REF.replace("refs/heads/", "")
  return `https://xolvio-ui.s3.amazonaws.com/${branchName}/DesignSystem/federation/`
}

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
    // location of where the compiled Storybook lives
    path: path.resolve(__dirname, "storybook-static/federation"),
    // the url where Storybook will be accessible from
    publicPath: isLocalFederation ? "//localhost:3030/federation/" : getAutomaticallyDeployedPath(),
  },

  plugins: [
    new StorybookWebpackFederationPlugin({
      name: "xolvio_ui", // this will be used by the consuming federation host
      files: {
        // paths to the components
        paths: ["./src/**/*.ts{,x}"],
      },
    }),
  ],
};
