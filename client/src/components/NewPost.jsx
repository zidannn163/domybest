import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    func: PropTypes.func.isRequired,
};


const NewPost = (props) => {
    return (
        <div className="new-post post" onClick={props.func}>
            <div className="new-post__icon" />
            <div className="new-post__title">Добавить новый пост</div>
        </div>
    );
};


NewPost.propTypes = propTypes;


export default NewPost;
