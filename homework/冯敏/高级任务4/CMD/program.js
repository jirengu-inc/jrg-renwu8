/**
 * Created by fm on 2017/2/17.
 */
define(function (require,exports,module) {
    var inc=require("./increment").increment;
    var a=2;
    var sum=inc(a);
    console.log(sum);
    module.id="program";
});