var webpack = require('webpack');
let path = require('path');
let webpackHtmlPlugin =  require('html-webpack-plugin');
module.exports = {
  entry:'./src/scripts/main.js',
  output:{
    path:path.join(__dirname,'/dist/'),
    filename:'js/bundle.js'
  },
  module:{
    loaders:[{
      test:/\.js$/,
      loader:"babel-loader",
      exclude:path.join(__dirname,'/node_modules/'),
      include:path.join(__dirname,'/src/scripts/')
    },{
      test:/\.css$/,
      loader:"style-loader!css-loader"
    },{
      test:/\.(png|jpg|gif|svg|jpeg)$/i,
      loader:'url-loader?image-webpack-loader'
    }],
  },
  plugins:[
    new webpackHtmlPlugin({
          template: 'index.html',
          minify: {
              removeComments: true,
              collapseWhitespace: true
          }
      })
  ]
}
