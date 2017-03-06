/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-02-27 21:19:41
 * @version $Id$
 */


var webpack = require("webpack");

module.exports = {
    entry: "./入口.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" },
          { 
            test: /\.jpg$/, 
            loader: "file-loader" 
          },
          {
　　　　　　test: /\.(png|jpg)$/,
　　　　　　loader: 'url-loader?limit=8192'
　　　　  }
        ]
    },
     resolve: {
        alias: {
            jquery: "../node_modules/jquery/dist/jquery.js"
        }
    },
     plugins:[
    new webpack.ProvidePlugin({
	      $:"jquery",
	      jQuery:"jquery",
	      "window.jQuery":"jquery"
    })
  ]
}
