/**
 * Created by fm on 2017/2/17.
 */
define(function () {
    function add() {
        var sum=0,i=0,args=arguments,l=args.length;
        while(i<l){
            sum+=args[i++];
        }
    }
    return {
        add:add
    }
})