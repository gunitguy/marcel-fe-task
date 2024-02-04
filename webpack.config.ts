import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackConfiguration } from "webpack-cli";

const config: WebpackConfiguration = {
  entry: "./src/index.ts",
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: false,
      inject: "body",
      meta: {
        charset: "UTF-8",
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }
    })
  ],
  watch: false,
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].js",
    chunkFilename: "[id].[contenthash].js"
  },
  optimization: {
    realContentHash: false
  }
};

export default config;
