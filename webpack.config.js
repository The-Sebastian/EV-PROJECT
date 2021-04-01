const path = require('path');

module.exports = {
  
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    mode: process.env.NODE_ENV,
    devServer: {
      publicPath: '/build',
      compress: true,
      port: 8080,
      proxy: {
        '/api': 'http://localhost:5000'
        },
    },
    module: {
      rules:[
        {
          test:/\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test:/\.css$/,
          use:['style-loader', 'css-loader']
        },
        {
          test:/\.(png|svg|jpg|gif$)/,
          use: ["file-loader"],
        }
      ]
    },
    // devServer: {
    //     contentBase: path.join(__dirname, 'public')
    // 
}