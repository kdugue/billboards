const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./client/index.js"],
  mode: "development",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "client")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader?name=app/images/[name].[ext]",
            options: {}
          }
        ]
      }
    ]
  }
};
