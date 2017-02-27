import React, {Component} from 'react';
import {render} from 'react-dom';
import $ from '../jq.js';
import './entry.scss';

let isRed = false;
class Comp extends Component {
    constructor() {
        super();
        this.state = {
            val: 0
        }
        this.fn = this
            .fn
            .bind(this);
    }
    //  //destroy componentWillUnmount(){     console.log('destroy'); } //before
    // render componentWillMount(){     console.log('componentWillMount'); } //
    // after render componentDidMount(){     console.log('componentDidMount'); }
    // //before update componentWillUpdate(){     console.log('即将更新'); } //after
    // update componentDidUpdate(){     console.log('更新结束'); }
    fn() {
        this.setState({
            val: this.state.val + 1
        })
        let node = this.refs['s1'];
        let $node = $(node);
        if (isRed) {
            $node.css('color', 'black');
        } else {
            $node.css('color', 'red');
        }
        isRed = !isRed;
    }
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <button ref='s1' onClick={this.fn}>UPDATE</button>
                <Child val={this.state.val}></Child>
            </div>
        );
    }
}
class Child extends Component {
    componentWillReceiveProps(nextProps) {
        console.log('ReceiveProps', nextProps);
    }
    //destroy
    componentWillUnmount() {
        console.log('destroy');
    }
    //before render
    componentWillMount() {
        console.log('componentWillMount');
    }
    // after render
    componentDidMount() {
        console.log('componentDidMount');
    }
    //before update
    componentWillUpdate() {
        console.log('即将更新');
    }
    //after update
    componentDidUpdate() {
        console.log('更新结束');
    }
    render() {
        return (
            <p>{this.props.val}</p>
        )
    }
}
let clockId;
class Clock extends Component {
    constructor() {
        super();
        this.state = {
            hour: 0,
            minute: 0,
            second: 0
        }
        let _this = this;
        clockId = setInterval(() => {
            _this.getTime();
        }, 2000)
    }
    //destroy
    componentWillUnmount() {
        clearInterval(clockId);
        console.log('destroy');
    }
    //before render
    componentWillMount() {
        console.log('componentWillMount');
        this.getTime();
    }
    // after render componentDidMount(){     console.log('componentDidMount'); }
    // //before update componentWillUpdate(){     console.log('即将更新'); } //after
    // update componentDidUpdate(){     console.log('更新结束'); }
    getTime() {
        let time = new Date();
        this.setState({
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds()
        })
    }
    render() {
        return (
            <div>
                <span>{this.state.hour}</span>
                <span>{this.state.minute}</span>
                <span>{this.state.second}</span>
            </div>
        )
    }
}

$('#open')
    .on('click', function () {
        render(
            <Comp/>, $('#root')[0])
    });

$('#close').on('click', function () {
    render(
        <p>nothing</p>, $('#root')[0])
});