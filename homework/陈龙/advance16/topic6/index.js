import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <li className="item">
                <a href={this.props.item.link}>
                    <img src="./loading.gif" data-src={this.props.item.img}  />
                    <h3>{this.props.item.title}</h3>
                    <p>{this.props.item.brif}</p>
                </a>
            </li>
        );
    }
}

class List extends Component{
    render(){
        return(
            <ul className="list">{
                this.props.data.map((e,index)=>{
                    return <Item key={index} item={e}/>
                })
            }</ul>
        );
    }
}

module.exports = List;