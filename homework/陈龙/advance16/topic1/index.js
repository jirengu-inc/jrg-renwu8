import React, {Component} from 'react';
import {render} from 'react-dom';
import $ from '../../jq';
import './index.scss';

class PicItem extends Component {
    render() {
        return (<img src='./img/loading.gif' data-src={this.props.url}/>)
    }
}

class PicList extends Component {
    getItems() {
        console.log(this.props.picList);
        let arr = this
            .props
            .picList
            .map((e, index) => {
                return (<PicItem key={index} url={e}/>)
            });
        return arr;
    }
    render() {
        return (
            <div className="wrapper">
                {this.getItems()}
            </div>
        )
    }
}

module.exports = PicList;