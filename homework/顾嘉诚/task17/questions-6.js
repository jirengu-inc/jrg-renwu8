//6.如下代码的输出？为什么 （难度***）
    function fn(fn2){
       console.log(fn2);
       var fn2 = 3;
       console.log(fn2);
       console.log(fn);
       function fn2(){
            console.log('fnnn2');
        }
     }
    fn(10);
/*结果为
  function fn2(){
            console.log('fnnn2');
        }
  3
  fn is not defined
*/    
/*
  //上面的代码相当于
  function fn(fn2){
    var fn2;
    function fn2(){
      console.log('fnnn2');
      }
    console.log(fn2);
    fn2 = 3;
    console.log(fn2);
    console.log(fn);
  }
  fn(10);
*/
/*
  function fn(fn2){
    var fn2;
    console.log(fn2);
  }
  fn(10);
  //结果为10
  var abc=1;var abc;//此时abc仍为1
*/
/*
  function fn(fn2){
    var fn2 = 3;
    console.log(fn2);
  }
  fn(10);
  //结果为3
*/