const $ = (str) => document.querySelector(str);
const $$ = (str) => document.querySelectorAll(str);

let isLoading = false;
const convert = (obj) => {
    let arr = [];
    for (let [key, value] of Object.entries(obj)) {
        arr.push(key + "=" + value);
    }
    console.log(arr.join('&'));
    return arr.join('&');
}
const ajax = (opts) => {
    if(BASE_URL === window.location.origin) {
        let xhr = new XMLHttpRequest();
        if (opts.type === 'get') {
            xhr.open(opts.type, opts.url + '?' + convert(opts.data), true);
            xhr.send();
            isLoading = true;
        } else if (opts.type === 'post') {
            xhr.open(opts.type, opts.url, true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(convert(opts.data));
            isLoading = true;
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                isLoading = false;
                if (xhr.status === 200) {
                    let res = xhr.responseText;
                    opts.success(JSON.parse(res));
                } else {
                    opts.error();
                }
            }
        }
    } else {//跨域，使用JSONP
        let wholeUrl = opts.url + '?' + convert(opts.data);
        addScript(wholeUrl);//和后端约定一个回调方法
    }
};

//todo
const BASE_URL = 'http://a.cl.com:8080';
const URL = BASE_URL + "/more";//访问接口的地址
let curNum = 0; //最后条目编号
const getData = (url=URL) => {
    ajax({
        url: url,
        type: 'get',
        data: {
            curNum: curNum,
            callback: 'onJsonpResult'
        },
        success: (res) => {
            console.log(res);
            addItems(res);
        },
        error: () => {
            console.log('出错了');
        }
    });
}
const addItems = (items) => {
    console.log(items.length);
    for (let index in items) {
        let node = document.createElement('div');
        node.classList.add('item');
        node.innerText = items[index];
        $('.list').appendChild(node);
        curNum++;
    }
}

//JSONP
const addScript=(wholeUrl)=>{
    let nodeScript = document.createElement('script');
    nodeScript.src = wholeUrl;
    $('head').appendChild(nodeScript);
    $('head').removeChild(nodeScript);
}
//后端返回结果的回调方法
const onJsonpResult =(json)=>{
    console.log('jsonp:', json,json.length);
    addItems(json);
};

//excute
getData();
$('.btn-more').addEventListener('click', () => {
    getData();
});