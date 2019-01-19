import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    settings: PropTypes.shape({
        buttonName: PropTypes.string.isRequired,
        buttonClass: PropTypes.string.isRequired,
        buttonFunc: PropTypes.func.isRequired,
    }).isRequired
};


const Button = (props) => <button className={props.settings.buttonClass} onClick={props.settings.buttonFunc}>{props.settings.buttonName}</button>;


Button.propTypes = propTypes;


export default Button;
