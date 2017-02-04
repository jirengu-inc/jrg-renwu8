import React, {Component} from 'react';
import {render} from 'react-dom';
import $ from '../../jq';
import PicList from './index';
import getData from './mock';

render(
    <PicList picList={getData()}/>, $('#root')[0]);

$(window).scroll(function () {
    loadImgs();
})

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

const loadImgs = ()=>{
    console.log('1');
    $('.wrapper img').not('.load').each(function(index){
    console.log('2');
        let $node = $(this);
        if(isShow($node)){
            $node.addClass('load');
            $node.attr('src',$node.attr('data-src'));
        }
    });
}

loadImgs();
