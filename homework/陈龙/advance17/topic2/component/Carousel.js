import React, {Component} from 'react';
import './carousel.scss'; //引入轮播图样式
import getInitial from './initial.js'

//整个轮播图（可复用：只需改变图片集合即刻）
class Carousel extends Component {
    componentDidMount() {
        getInitial(this.props.imgList);
    }
    render() {
        return (
            <div className="carousel">
                <div className="img-ct">
                    {this
                        .props
                        .imgList
                        .map((e, i) => {
                            return (
                                <a href="" key={i} data-index={i}>
                                    <img src={e}/>
                                </a>
                            )
                        })
}
                </div>
                <a href="#" className="arrow arrow-pre">&lt;</a>
                <a href="#" className="arrow arrow-next">&gt;</a>
                <div className="bullet-ct">
                    <ul className="bullet">
                        {this
                            .props
                            .imgList
                            .map((e, i) => {
                                return <li
                                    className={i === 0
                                    ? 'active'
                                    : ''}
                                    key={i}></li>;
                            })
}
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = Carousel;