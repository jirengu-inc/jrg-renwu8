function ajax(opts) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
            var json = JSON.parse(xmlhttp.responseText);
            opts.success(json);
        }
    }

    var dataString = "";
    for (var key in opts.data) {
        dataString += key + "=" + opts.data[key] + "&";
    }
    dataString = dataString.substr(0, dataString.length - 1);

    if (opts.type.toLowerCase() === "get") {
        xmlhttp.open("get", opts.url + "?" + dataString, true);
        xmlhttp.send();
    } else if (opts.type.toLowerCase() === "post") {
        xmlhttp.open("post", opts, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(dataString);
    }
}

function $(id) {
    return document.getElementById(id);
}

function judgeValidUsername(str) {
    if (/^[A-Za-z_0-9]{3,10}$/.test(str)) {
        return true;
    } else {
        return false;
    }
}

function judgeValidPassword(str) {
    if (str.length < 6 || str.length > 15) {
        return false;
    }
    if (/[^A-Za-z_0-9]/.test(str)) {
        return false;
    }
    if (/(^[a-z]+$)|(^[A-Z]+$)|(^_+$)|(^\d+$)/g.test(str)) {
        return false;
    }
    return true;
}

function addClass(element, cls) {
    element.className += '' + cls;
}

function removeClass(element, cls) {
    element.className = element.className.replace(new RegExp('\\b' + cls + '\\b', 'g'), '');
}

function testUsernameIsValid() {
    ajax({
        url: 'getData.php',
        type: 'get',
        data: {
            username: $("username").value
        },
        success: function(ret) {
            if (ret == '1') {
                addClass($("username"), 'error-active');
                $("username-hint").innerText = '用户名已经存在';
            } else {
                removeClass($("username"), 'error-active');
                $("username-hint").innerText = '用户名可用';
            }
        },
        error: function() {
            console.log('出错了...');
        }
    });
}

function testName() {
    if (!testUsernameIsValid($("username").value)) {
        addClass($("username"), 'error-active');
        $("username-hint").innerText = '用户名格式不正确';
        return false;
    } else {
        removeClass($("username"), 'error-active');
        $("username-hint").innerText = '用户名可用';
        return true;
    }
}
function testFirstPassword() {
    if (!judgeValidPassword($("password").value)) {
        addClass($("password"), 'error-active');
        $("password-hint").innerText = '密码格式不正确';
        return false;
    } else {
        removeClass($("password"), 'error');
        $("password-hint").innerText = '';
        return true;
    }
}
function testSecondPassword() {
    if ($("rePassword").value !== $("password").value) {
        addClass($("rePassword"), 'error-active');
        $("re-password-hint").innerText = '两次密码输入不一致';
        return false;
    } else {
        removeClass($("rePassword"), 'error');
        $("re-password-hint").innerText = '';
        return true;
    }
}

$("username").addEventListener('change', function() {
    testName() && judgeValidUsername();
});

$("password").addEventListener('change', function() {
    testFirstPassword();
});

$("rePassword").addEventListener('change', function() {
    testSecondPassword();
});
$("btn").addEventListener('click', function() {
    if (testName() && testFirstPassword() && testSecondPassword() && judgeValidUsername()) {
        alert('注册中...');
        console.log('注册中...');
    }
});
