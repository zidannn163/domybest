import React, { Component } from 'react';
import PropTypes from 'prop-types';

import poster from '../img/poster_none.png';

const propTypes = {
    text: PropTypes.string.isRequired,
    date: PropTypes.string,
};


class BigPost extends Component {
    render() {
        console.log(this.props.date)
        return (
            <div className="post post_size_bg">
                <img src={poster} alt="Здесь могла быть фотография" className="post__img post__img_size_bg" />
                
                <div className="post__text">{this.props.text}</div>
            </div>
        );
    }
}


BigPost.propTypes = propTypes;


export default BigPost;
