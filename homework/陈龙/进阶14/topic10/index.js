import React, {Component} from 'react';
import './index.scss';
import $ from '../jq';
import getData from './mock.js';

class NodeLi extends Component {
    render() {
        return (
            <li
                key={index}
                count={count}
                className={index < 3
                ? 'top'
                : ''}>
                <img src={good.url}/>
                <p className="title">{good.title}</p>
                <p className="price">{good.price}</p>
                <button>立即购买</button>
            </li>
        )
    }
}

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content1: getData(),
            content2: getData(),
            index1: 0,
            index2: 0
        };
    }
    //rend之前
    componentWillMount() {
        console.log('componentWillUpdate');
    }
    //rend之后
    componentDidMount() {
        console.log('componentDidMount');

        //todo========================此处是jquery代码======================================
        const $tabs = $('.aside1 .tabs li'),
            $content = $('.aside1 .content');
        let reactThis = this; //因为绑定事件的回调方法会返回一个this，故需要将当前的this保存起来，暴露给该回调方法
        $tabs.on('click.aside1', function (e) {
            let index = $tabs.index(this) % 3,
                count = $('.tabs').index($(this).parent('.tabs'));
            if (count === 0) {
                reactThis.setState({index1: index});
            } else {
                reactThis.setState({index2: index});
            }
        });
    }
    //创建元素，并放入.content里面
    returnLi(good, index = 0, count) {
        return (
            <li
                key={index}
                className={index < 3
                ? 'top'
                : ''}>
                <img src={good.url}/>
                <p className="title">{good.title}</p>
                <p className="price">{good.price}</p>
                <button>立即购买</button>
            </li>
        );
    }
    fillData(goodList) {
        return goodList.map((e, index) => {
            return this.returnLi(e, index);
        });
    }
    render() {
        return (
            <div className="root">
                <div className="aside1">
                    <ul className="tabs">
                        <li>
                            <a href="javascript:void(0)">热门</a>
                        </li>
                        <span>|</span>
                        <li>
                            <a href="javascript:void(0)">数码</a>
                        </li>
                        <span>|</span>
                        <li>
                            <a href="javascript:void(0)">鞋子</a>
                        </li>
                    </ul>
                    <ul className="content">
                        {this.fillData(this.state.content1[this.state.index1])}
                    </ul>
                </div>
                <div className="aside1">
                    <ul className="tabs">
                        <li>
                            <a href="javascript:void(0)">热门</a>
                        </li>
                        <span>|</span>
                        <li>
                            <a href="javascript:void(0)">数码</a>
                        </li>
                        <span>|</span>
                        <li>
                            <a href="#">鞋子</a>
                        </li>
                    </ul>
                    <ul className="content">
                        {this.fillData(this.state.content2[this.state.index2])}
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = MyComponent;