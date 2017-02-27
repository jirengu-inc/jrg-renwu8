import $ from '../../jq';
import React, {Component} from 'react';
import {render} from 'react-dom';
import List from './index';
import './index.scss';

let index = 0,
    listData = [],
    $btn = $('.btn');

//判断元素是否在可视窗口上
const isShow = ($node) => {
    let windowHeight = $(window).height(),
        scrollTop = $(window).scrollTop(),
        offsetTop = $node
            .offset()
            .top,
        nodeHeight = $node.height();
    if (windowHeight + scrollTop > offsetTop && offsetTop + nodeHeight > scrollTop) {
        return true;
    } else {
        return false;
    }
}
//遍历并加载所有图片
const loadImgs = () => {
    console.log('1');
    $('.item img')
        .not('.load')
        .each(function (index) {
            console.log('2');
            let $node = $(this);
            if (isShow($node)) {
                $node.addClass('load');
                $node.attr('src', $node.attr('data-src'));
            }
        });
}
//渲染List组件（react）
const doRender = (data) => {
    render((<List data={data}/>), $('.wrapper')[0]);
};
//获取数据
const getData = () => {
    $
        .get('http://localhost:8080/getNews', {index: index})
        .done(function (res) {
            if (res.status === 0) {
                let data = res.data;
                index += data.length;
                if (data.length > 0) {
                    listData.push(...data);
                    doRender(listData);
                    if (isShow($btn)) {
                        getData();
                    }
                    loadImgs();
                } else {
                    $btn
                        .html('<span>没有更多</span>')
                        .data('isOver', true);
                }
            } else {
                alert('获取数据失败!');
            }
        })
        .fail(function () {})
        .always(function () {
            if ($btn.data('isOver') !== true) {
                $btn
                    .data('isLoading', false);
                    // .html('加载更多')
            }
        });
};
const getDataWithCheck = () => {
    if ($btn.data('isLoading') || $btn.data('isOver')) {
        return;
    }
    $btn
        .html('<img src="./loading.gif"/>')
        .css('visibility', 'visible')
        .data('isLoading', true);
    getData();
}
getDataWithCheck();

//监听列表是否滚动到底部，若滚动到底部则再次加载(用最底部的元素是否在视窗范围内来判断)
$(window).scroll(function () {
    if (isShow($btn)) {
        getDataWithCheck();
    }
    loadImgs();
})
