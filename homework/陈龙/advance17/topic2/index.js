import $ from '../../jq';
import React, {Component} from 'react';
import {render} from 'react-dom';
import Carousel from './component/Carousel.js';
import DATA from './mock.js'; //去除图片集合(动态生成轮播图)

//将Carousel组件渲染到页面上
render(
    <Carousel imgList={DATA}/>, $('#root')[0]);
