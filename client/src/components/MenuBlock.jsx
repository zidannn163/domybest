import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';


const propTypes = {
    buttons: PropTypes.arrayOf( PropTypes.shape({
        buttonName: PropTypes.string,
        buttonClass: PropTypes.string,
        buttonFunc: PropTypes.func,
    }).isRequired ).isRequired,
    menuTitle: PropTypes.string.isRequired,
};


const menu__block = (props) => {
    return (
        <div className="menu__block">
            <div className="menu__title">{ props.menuTitle }</div>
            <div className="buttons">
                {props.buttons.map((button) => 
                    button.buttonName && 
                    <Button settings={button}/>
                    
                )}
            </div>
        </div>
    );
};


menu__block.propTypes = propTypes;


export default menu__block;
