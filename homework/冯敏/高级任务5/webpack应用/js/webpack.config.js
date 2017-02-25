/**
 * Created by fm on 2017/2/22.
 */
var webpack=require("webpack");
var DefinePlugin = require("webpack/lib/DefinePlugin");
var path=require("path");
module.exports={
    entry:"./main.js",
    output:{
        filename:"bundle.js"
    },
    resolve:{
      alias:{
          jquery: "./jquery.min.js"
      }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
        })
    ]
};

