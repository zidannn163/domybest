import React, { Component } from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    findFunc: PropTypes.func.isRequired,
    finderLabel: PropTypes.string.isRequired,
};



class Finder extends Component {

    constructor(props) {
        super(props)
    }

    handlerClick = (e) => {
        e.preventDefault();
        console.log("Искать");
        // this.props.findFunc()
    }

    render() {
        return (
            <form className="finder ">
                <label className="finder__title">{this.props.finderLabel}</label>
                <input />
                <button onClick={this.handlerClick} className="finder__button button_stnd button">Поиск</button>
            </form>
        );
    }
}


Finder.propTypes = propTypes;


export default Finder;
