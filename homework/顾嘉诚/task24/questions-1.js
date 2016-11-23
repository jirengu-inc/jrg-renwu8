// 1.封装一个 ajax 函数，能通过如下方式调用
function ajax(opts){
    var xmlhttp = new XMLHttpRequest();
    var value='';
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            opts.sucess(JSON.parse(xmlhttp.responseText));
        }else if(xmlhttp.readyState === 4 && xmlhttp.status !== 200){
            opts.error();
        }
    }
    for(var key in opts.data){
        value += key+ '=' + opts.data[key] + '&';
    }
    value = value.substr(0,value.length-1);
    if(opts.type.toLowerCase() === 'post'){
        xmlhttp.open('POST',opts.url,true);
        xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xmlhttp.send(value);
    }else if(opts.type.toLowerCase() === 'get'){
        xmlhttp.open('GET',opts.url + '?' + value,true);
        xmlhttp.send();
    }
}
document.querySelector('#btn').addEventListener('click', function(){
    ajax({
        url: 'getData.php',   //接口地址
        type: 'get',               // 类型， post 或者 get,
        data: {
            username: 'xiaoming',
            password: 'abcd1234'
        },
        success: function(ret){
            console.log(ret);       // {status: 0}
        },
        error: function(){
           console.log('出错了')
        }
    })
});