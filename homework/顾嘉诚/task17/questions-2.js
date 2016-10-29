//2.写一个函数，返回参数的平方和？如 （难度**）
   function sumOfSquares(){
        var result=0;
        for(var i=0;i<arguments.length;i++){
            result+=arguments[i]*arguments[i];
        }
        return result;

   }
   sumOfSquares(2,3,4);   // 29
   sumOfSquares(1,3);   // 10