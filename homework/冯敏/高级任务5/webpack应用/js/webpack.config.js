/**
 * Created by fm on 2017/2/22.
 */
var webpack=require("webpack");
module.exports={
    entry:"./main.js",
    output:{
        filename:"bundle.js"
    },
    resolve:{
      alias:{
          jquery:"./jquery.js"
      }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
        })
    ]
};

