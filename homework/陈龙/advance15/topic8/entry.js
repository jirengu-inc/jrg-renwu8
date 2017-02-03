import $ from '../../jq';
import React, {Component} from 'react';
import {render} from 'react-dom';
import List from './index';
import './index.scss';

let index=0, listData=[];
// render((
//     <Item/>
// ), $('.list')[0]);

$('.btn').on('click',function(){
    getData(index);
});

const doRender=(data)=>{
    render((
        <List data={data}/>
    ), $('.wrapper')[0]);
};
//获取数据
const getData = (i=0, size=5)=>{
    console.log(i, size);
    $.get('http://localhost:8080/getInfo',{index:index,size:size})
    .done(function(res){
        if(res.status===0){
            let data = res.data;
            index=i+data.length;
            console.log(data,index);
            if(data.length>0){
                listData.push(...data);
                doRender(listData);
            }
        }else{
            alert('获取数据失败!');
        }
    }).fail(function(){
        console.log('fail');
    });
};

getData(0,2);

