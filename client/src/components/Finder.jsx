import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const propTypes = {
    findFunc: PropTypes.func.isRequired,
    finderLabel: PropTypes.string.isRequired,
};



class Finder extends Component {


    handleForm = () => {
        const find = this.refs.find.value;
        this.props.findFunc(find)
    }

    render() {
        return (
            <form className="finder ">
                <label className="finder__title">{this.props.finderLabel}</label>
                <input ref="find"/>
                <Button buttonName={'Поиск'} 
                        buttonClass={'finder__button button_stnd button'}  
                        func={ this.handleForm }/>
                
            </form>
        );
    }
}


Finder.propTypes = propTypes;


export default Finder;
