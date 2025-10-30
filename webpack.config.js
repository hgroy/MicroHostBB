const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3005,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    // alias: {
    //   hostapp: path.resolve(__dirname, 'path/to/hostapp'),
    // },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/i, 
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "hostapp",
      filename: "remoteEntry.js",

    remotes: {
        chatapp: "chatapp@http://localhost:3006/remoteEntry.js",
        emailapp: "emailapp@http://localhost:3007/remoteEntry.js",
        },
        
      exposes: {
        "./Card": "./src/components/Cards",
        "./Button": "./src/components/Button",
    
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
