import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';


const propTypes = {
    formHandler: PropTypes.func.isRequired,
};


class NewPostForm extends Component {

    handleForm = () => {

        const newPost = {
            title: this.refs.title.value,
            text: this.refs.text.value,
            tags: this.refs.tags.value
        }
        this.props.formHandler(newPost)
    }


    render() {
        return (
            <form  className="form" >
                <label className="form__lable">Название поста:</label>
                <input ref="title" maxLength={45} type="text" className="form__input" />
                <label className="form__lable">Теги (через пробел):</label>
                <input ref="tags" maxLength={45} type="text" className="form__input" />
                <label className="form__lable">Ваш текст:</label>
                <textarea ref="text" className="form__textarea" defaultValue={""} />

                <Button buttonName={'Опубликовать'} 
                        buttonClass={'button_stnd button'}  
                        func={this.handleForm}
                        />
            </form>
        );
    }
}


NewPostForm.propTypes = propTypes;


export default NewPostForm;

