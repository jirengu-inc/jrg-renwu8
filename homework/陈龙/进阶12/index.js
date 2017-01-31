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
};

//todo
let curNum = 0; //最后条目编号
const getData = () => {
    ajax({
        url: '/more',
        type: 'get',
        data: {
            curNum: curNum,
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
getData();
$('.btn-more').addEventListener('click', () => {
    getData();
});