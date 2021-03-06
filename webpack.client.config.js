/* eslint-disable */
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    counter: "./src/views/components/counter/index.tsx",
    canvas: "./src/views/components/canvas/index.tsx",
    header: "./src/views/components/header/index.tsx",
    main_links: "./src/views/components/mainlinks/index.tsx",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(process.cwd(), "public"),
    publicPath: "/"
  },
  devtool: "eval-cheap-module-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      }
    ]
  }
};