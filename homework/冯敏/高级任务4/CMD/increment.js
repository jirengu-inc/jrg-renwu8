/**
 * Created by fm on 2017/2/17.
 */
define(function (require,exports,module) {
    var add=require("./math").add;
    exports.increment=function (val) {
        return add(val,1);
    }
});