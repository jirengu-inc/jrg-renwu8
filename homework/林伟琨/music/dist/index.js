/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)

function $(el) {
    return document.querySelector(el)
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function ajax(opts) {
    //默认设置
    let settings = {
        url: '',
        type: 'get',
        data: {},
        dataType: 'json',
        succ: function () {},
        erro: function () {}
    };
    for (let attr in opts) {
        settings[attr] = opts[attr];
    }

    let arr = [];
    for (let attr in settings.data) {
        arr.push(encodeURIComponent(attr) + '=' + encodeURIComponent(settings.data[attr]));
    }
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

    if (typeof xhr.onload === 'undefined') {
        xhr.onreadystatechange = ready;
    } else {
        xhr.onload = ready;
    }

    function ready() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                switch (settings.dataType.toLowerCase()) {
                    case "text":
                        settings.succ(xhr.responseText);
                        break;
                    case "json":
                        settings.succ(JSON.parse(xhr.responseText));
                        break;
                    case "xml":
                        settings.succ(xhr.responseXML);
                }
            } else if (xhr.status == 404) {
                settings.fail(xhr.status);
            }
        }
    }
    if (settings['type'].toLowerCase() === 'get') {
        xhr.open('get', settings.url + '?' + settings.data, true);
        xhr.send();
    } else {
        xhr.open(settings.type, settings.url, true);
        xhr.setRequestHeadr('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(arr.join("&"));
    }
}
function Music() {
    this.music = new Audio();
    this.musicBox = $('.music-box');
    this.musicWidth = parseInt(window.getComputedStyle(this.musicBox).width)
    this.control = $('.music-control')
    this.pre = $('.pre')
    this.next = $('.next')
    this.play = $('.play')
    this.pause = $('.pause');
    this.rate =$('.rate')
    this.volumeControlChild=$('.volume-control-child')
    this.hadPlay = [];
    this.volumeRate = 0.2;
    this.volumeTotalWidth = $('.volume-control').offsetWidth;
    this.rateChild=$('.rate-child');
    this.channelTotal=$('.channel-total');
    this.channel = null;
    this.flag = true; //控制channel显示
    this.init();
    this.bindEvent();
}
Music.prototype = {
    constructor: Music,
    init: function () {
        this.getChannel();
        this.getMusic();
        this.volumeControlChild.style.width = this.volumeRate * this.volumeTotalWidth + 'px';
        this.music.volume = this.volumeRate;
    },
    //音乐play/pause的控制
    playFn: function () {
        this.music.play();
        this.play.style.display = 'none';
        this.pause.style.display = 'inline-block';
    },
    pauseFn: function () {
        this.music.pause();
        this.play.style.display = 'inline-block';
        this.pause.style.display = 'none';
    },
    bindEvent: function () {
        var self = this;
        //进度条动画
        this.music.addEventListener('canplay', function () {
            setInterval(function () {
                var r = self.music.currentTime / self.music.duration
                self.rateChild.style.width = self.musicWidth * r + 'px'
            }, 100)
        })
        //进度条点击事件
        this.rate.addEventListener('click', function (e) {
            console.log(e.offsetX)
            var newRate = e.offsetX / self.musicWidth;
            self.music.currentTime = self.music.duration * newRate
        })
        this.music.addEventListener('ended', function () {
            self.getMusic();
        })
        this.play.addEventListener('click', function () {
            self.playFn();
        })
        this.pause.addEventListener('click', function () {
            self.pauseFn();
        })
        this.next.addEventListener('click', function () {
            self.getMusic();
        })
        //上一首音乐的控制
        this.pre.addEventListener('click', function () {
            console.log(self.hadPlay.length)
            if (self.hadPlay.length - 1 <= 0) {
                self.pauseFn();
                return;
            }
            self.onPlaySetting(self.hadPlay[self.hadPlay.length - 2])
            self.hadPlay.pop()
        })
        //频道的控制
        $('.icon-git45').addEventListener('click', function () {
            if (self.flag) {
                self.channelTotal.style.display = 'block';
                self.flag = false;
            } else {
                self.channelTotal.style.display = 'none';
                self.flag = true;
            }
        })
        //音乐类型的控制
        this.channelTotal.addEventListener('click', function (e) {
            var channelId = e.target.getAttribute('channelId')
            if (channelId) {
                self.channel = channelId;
                self.getMusic();
                self.channelTotal.style.display = 'none';
                self.flag = true;
            }
        }, true)
        //音量使用 事件代理
        $('.volume').addEventListener('click', function () {
            self.music.volume = self.volumeRate;
        })
        $('.volume-on').addEventListener('click', function () {
            self.volumeRate = 1;
            self.volumeControlChild.style.width = self.volumeTotalWidth + 'px'
        })
        $('.volume-off').addEventListener('click', function () {
            self.volumeRate = 0;
            self.volumeControlChild.style.width = 0;
        })
        $('.volume-control').addEventListener('click', function (e) {
            self.volumeRate = e.offsetX / self.volumeTotalWidth;
            self.volumeControlChild.style.width = e.offsetX + 'px'
        })
    },
    //当数据来到之后，改变src,title,artist,icon的状态，bg的改变。 
    onPlaySetting: function (data) {
        this.music.src = data.url;
        $('.music-bg').style.backgroundImage = 'url(' + data.picture + ')';
        $('.title').innerText = data.title;
        $('.artist').innerText = data.artist;
        this.playFn();
    },
    //获取歌曲信息
    getMusic: function () {
        var self = this;
        var data = this.channel ? 'channel=' + this.channel : 'channel=public_shiguang_90hou';
        ajax({
            url: 'http://api.jirengu.com/fm/getSong.php',
            type: 'get',
            data: data,
            dataType: 'json',
            succ: function (data) {
                data = data.song[0];
                //console.log(data)
                self.hadPlay.push(data)
                self.onPlaySetting(data)
            }
        })
    },
    //获取频道
    getChannel: function () {
        ajax({
            url: 'http://api.jirengu.com/fm/getChannels.php',
            dataType: 'json',
            succ: function (channelLis) {
                channelLis = channelLis.channels;
                var arr = [];
                var str = '';
                for (var i = 0; i < channelLis.length; i += 2) {
                    str += '<tr><td channelId=' +
                        channelLis[i].channel_id +
                        '>' + channelLis[i].name +
                        '</td><td channelId=' +
                        channelLis[i + 1].channel_id +
                        '>' + channelLis[i + 1].name +
                        '</td></tr>'
                }
                $('.channel-total tbody').innerHTML = str
            }
        })
    }
}
var p = new Music();

/***/ })
/******/ ]);