/**
 * Created by fm on 2017/2/17.
 */
define(["./math"],function (math) {
    function increment(val) {
        math.add(val,1);
    }
    return{
        increment:increment,
    }
})