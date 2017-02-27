import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <li>{this.props.content}</li>
        );
    }
}

class List extends Component{
    render(){
        return(
            <ul className="list">{
                this.props.data.map((e,index)=>{
                    return <Item key={index} content={e}/>
                })
            }</ul>
        );
    }
}

module.exports = List;