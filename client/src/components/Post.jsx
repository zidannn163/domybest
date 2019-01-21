import React, { Component } from 'react';
import PropTypes from 'prop-types';

import poster from '../img/poster_none.png';


const propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    minimized: PropTypes.bool,
    func: PropTypes.func.isRequired,
    date: PropTypes.string,
    bubbleFunc: PropTypes.func.isRequired,
};

const defaultProps = {
    date: '2019-01-20T21:00:00.000Z',
}


class Post extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            bubble: false,
        }
    }
    
    uncover = (e) => {
        e.preventDefault();
        this.props.func(this.props.id) 
            
        setTimeout(() => {
            if (!this.props.minimized) {
                this.setState( {bubble: true})
            }
        }, 2000)
    }

    handleBubble = (e) => {
        e.preventDefault();
        const title =  this.props.title,
              text  =  this.props.text,
              id    =  this.props.id,
              date  =  this.props.date

        this.props.bubbleFunc(title, text, id, date)
        
    }

    
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.minimized) {
            this.setState({bubble: false})
        } 
    };

    render() {
        return (
            
            <div className="post">
                <img src={poster} alt='Тут могло бы быть описание изображения' className="post__img" />
                <div className="post__title">{this.props.title}</div>
                <div className="post__date">{this.props.date.slice(0, 10)}</div>
                
                { this.props.minimized  ? 
                    <div>
                        <div className="post__prev">
                            {this.props.text.slice(0, 40) + "..."}
                        </div>
                        <a href="#" onClick={this.uncover} className="post__cliker">Читать полностью</a>
                    </div>
                :
                    <div className="post__text">{this.props.text}</div>
                }
                { this.state.bubble && !this.props.minimized &&
            
                    <div className="d-CP-border d-CP-border__new-window" >
                        <div className="post__new-window"> 
                            <a className="post__cliker post__cliker_cloud" href="#" onClick={this.handleBubble} >Читать <br /> в новом окне</a> 
                        </div>
                    </div>
                }

            </div>

            
        );
    }
}


Post.propTypes = propTypes;
Post.defaultProps = defaultProps;



export default Post;
