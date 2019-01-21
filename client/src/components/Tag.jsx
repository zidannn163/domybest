import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    id: PropTypes.number.isRequired,
    tag: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
};


class Tag extends Component {

    handlClick = () => {
        this.props.func(this.props.id);
    }

    render() {
        return <a href="#" onClick={this.handlClick} key={this.props.id} className="tag">{`#${this.props.tag}`}</a>
    }
}


Tag.propTypes = propTypes;


export default Tag;
