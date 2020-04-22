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
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "xolvioDesignSystem",
      library: { type: "var", name: "xolvioDesignSystem" },
      filename: "remoteEntry.js",
      exposes: {
        CenteredContentWrapper: "./src/helpers/CenteredContentWrapper.tsx",
        Title: "./src/components/Title.tsx",
        Background: "./src/elements/Background.tsx",
        Sections: "./src/components/Sections.tsx",
        ScreenIcon: "./src/components/icons/ScreenIcon.tsx",
        FlipchartIcon: "./src/components/icons/FlipchartIcon.tsx",
        ShapesIcon: "./src/components/icons/ShapesIcon.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
};
