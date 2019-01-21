
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    buttonName: PropTypes.string.isRequired,
    buttonClass: PropTypes.string.isRequired,
    func: PropTypes.func,
    params: PropTypes.array
    
};

const defaultProps = {
    func: () => {},
    params: []
}



class Button extends Component {


    

    handlerClick = (e) => {
        console.log(e)
        e.preventDefault();
        this.props.func(...this.props.params);
    }

    render() {
        return <button onClick={this.handlerClick} className={this.props.buttonClass} >{this.props.buttonName}</button>
    }
}


Button.propTypes = propTypes;
Button.defaultProps = defaultProps;


export default Button;
