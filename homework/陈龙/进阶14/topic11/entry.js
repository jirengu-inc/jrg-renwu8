import getRandomData from './mock.js';
import './index.scss';
import $ from '../jq.js';

const $btn = $('.btn');
insertItems();
insertItems();
insertItems();
function insertItems(){
    let data = getRandomData();
    let $ul = $('<ul class="panel"></ul>');
    for (let index in data) {
        let item = data[index];
        let $li = $('<li>\
                <img src="'+item.url+'"/>\
                <p class="title">' + item.title + '</p>\
                <p class="price">' + item.price + '</p>\
                <button>立即购买</button>\
            </li>');
        $ul.append($li);
    }
    $btn.before($ul);
}
$btn.on('click', insertItems);