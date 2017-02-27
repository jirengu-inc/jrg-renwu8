/**
 * Created by fm on 2017/2/17.
 */
define(function (require,exports,module) {
    exports.add=function () {
        var sum=0,i=0,args=arguments,l=args.length;
        while(i<l){
            sum+=args[i++];
        }
        return sum;
    }
});