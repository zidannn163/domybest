import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    
};


const NewPost = () => {
    return (
        <div className="new-post post">
            <div className="new-post__icon" />
            <div className="new-post__title">Добавить новый пост</div>
        </div>
    );
};


NewPost.propTypes = propTypes;


export default NewPost;
