/**
 * Created by zm on 2016/10/27.
 */
function ajax(opts) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        //ajax成功
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText);
            opts.success(json);
        }
        if (xmlhttp.status == 404) {
            opts.error();
        }
    }
    var dataStr = "";
    for (var k in opts.data) {
        //?username='xxxx'&pwd="123"这种格式,用于get模式提交的时候
        dataStr += k + "=" + opts.data[k] + "&";
    }
    dataStr = dataStr.substr(0, dataStr.length - 1);
    if (opts.type.toLocaleLowerCase() === 'get') {
        xmlhttp.open(opts.type, opts.url + '?' + dataStr, true);
        xmlhttp.send();
    }
    if (opts.type.toLocaleLowerCase() === 'post') {
        xmlhttp.open(opts.type, opts.url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(dataStr);
    }
}