import React from 'react';
import PropTypes from 'prop-types';



const propTypes = {
    title: PropTypes.string.isRequired,
};


const MenuBlock = (props) => {
    return (
        <div className="menu__block">
            <div className="menu__title">{ props.title }</div>
            {props.children}
        </div>
    );
};


MenuBlock.propTypes = propTypes;


export default MenuBlock;
