import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    mod: PropTypes.shape({
        minimized: PropTypes.bool.isRequired,
        full: PropTypes.bool.isRequired,
        bigSize: PropTypes.bool.isRequired,
    }).isRequired,
    func: PropTypes.func.isRequired,
};


class Post extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            minimized: this.props.mod.minimized,
            full: this.props.mod.full,
            bigSize: this.props.mod.bigSize,

            bubble: false
        }
    }
    
    uncover(e) {
        e.preventDefault();
        console.log("Разывернуть");
        this.setState({
            minimized: true
        })
        this.props.func.closer(this.props.id) // Написать закрытие соседней по нажатию на эту
        if (!this.state.full) {

            setTimeout(() => this.setState({bubble: true}))
        }
    }



    render() {
        return (
            <div className="post">
                <img src="poster_none.png" alt='Тут могло бы быть описание изображения' className="post__img" />
                <div className="post__title">Никогда такого не было и вот опять</div>
               
                { this.state.minimized ? 
                    <div>
                        <div className="post__prev">{this.props.text.slice(0, 40) + "..."}</div>
                        <a href="#" onClick={this.uncover} className="post__cliker">Читать полностью</a>
                    </div>
                :
                    <div className="post__text">{this.props.text}</div>
                }
                { this.state.bubble &&
                    <div className="d-CP-border d-CP-border__new-window">
                        <div className="post__new-window"> 
                            <a className="post__cliker post__cliker_cloud" href="#">Читать <br /> в новом окне</a> 
                        </div>
                    </div>
                }
            </div>
        );
    }
}


Post.propTypes = propTypes;


export default Post;
