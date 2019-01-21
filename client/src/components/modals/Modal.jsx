import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


const propTypes = {
    close: PropTypes.func.isRequired,
    mod: PropTypes.string,
    title: PropTypes.string,
};


class Modal extends Component {

    componentWillMount = () => {
        this.modal = document.createElement('div');
        document.body.appendChild(this.modal)
    };

    componentWillUnmount = () => {
        document.body.removeChild(this.modal)
    };
    
    

    render() {
        return ReactDOM.createPortal(
            <div className="d-blocker">
                <div className={`modal ${this.props.mod}`}>
                    <button className="modal__close button" onClick={this.props.close}>Закрыть</button>
                    <div className="modal__title" >{this.props.title}</div>
                    <div className="modal__content">
                        {this.props.children}
                    </div>
                </div>
            </div>
            ,
            this.modal
        );
    }
}


Modal.propTypes = propTypes;


export default Modal;
