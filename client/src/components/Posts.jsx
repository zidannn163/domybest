import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewPost from './NewPost';
import Post from './Post';

const propTypes = {
    posts: PropTypes.arrayOf( PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.string,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired ),
    func: PropTypes.func.isRequired,
    bubbleFunc: PropTypes.func.isRequired,
};


class Posts extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            activeId: 0
        }

    }

    closer = (id) => {
        this.setState({
            activeId: id
        })
    }

    newPost = (e) => {
        e.preventDefault();
        console.log('test 1')
    }
    

    render() {

        return (
            <div className="posts">
                {this.props.posts.map((post) =>
                                                <Post title={post.title} 
                                                      key={post.id}
                                                      date={post.date}
                                                      id={post.id}
                                                      text={post.text}
                                                      minimized={post.id===this.state.activeId ?  false : true}  
                                                      func={this.closer}
                                                      bubbleFunc={this.props.bubbleFunc}/>
                    )
                }
                <NewPost func={this.props.func}/>

            </div>
        );

    }
};


Posts.propTypes = propTypes;


export default Posts;
