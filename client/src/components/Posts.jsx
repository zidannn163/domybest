import React from 'react';
import PropTypes from 'prop-types';

import NewPost from './NewPost';
import Post from './Post';

const propTypes = {
    posts: PropTypes.arrayOf( PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        mod: PropTypes.shape({
            minimized: PropTypes.bool.isRequired,
            full: PropTypes.bool.isRequired,
            bigSize: PropTypes.bool.isRequired,
        }).isRequired,
    }).isRequired ),
    func: PropTypes.func.isRequired,
};


const Posts = (props) => {
    return (
        <div className="posts">
            {props.posts.map((post) => <Post title={post.title} 
                                             key={post.id}
                                             id={post.id}
                                             text={post.text}
                                             mod={post.mod}  
                                             func={post.func}/>
                )
            }
            <NewPost/>
            <div className="post">
                <img src="poster_none.png" alt className="post__img" />
                <div className="post__title">Никогда такого не было и вот опять</div>
                <div className="post__prev">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <a href="#" className="post__cliker">Читать полностью</a>
            </div>
            <div className="post">
                <img src="poster_none.png" alt className="post__img" />
                <div className="post__title">Никогда такого не было и вот опять</div>
                <div className="post__prev">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div className="post__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque odit fugiat veritatis incidunt at, rerum mollitia repellendus deleniti esse temporibus exercitationem enim quam! Nemo laborum aliquid delectus, enim iste autem.
                Obcaecati ratione voluptatibus officia, ut illum debitis et harum earum ipsum id ipsa perferendis laboriosam pariatur quod, corrupti, voluptatem totam fugit excepturi odio culpa hic tempora inventore quas. Laudantium, sequi.
                Sint, quaerat! Architecto sint exercitationem ea dolore, ducimus adipisci, nisi animi magni aperiam unde nesciunt qui nemo aliquid hic, tempore suscipit. Dolorem ullam tenetur facere non perspiciatis. Inventore, maiores eaque!</div>
                <div className="d-CP-border d-CP-border__new-window">
                <div className="post__new-window"> <a className="post__cliker post__cliker_cloud" href="#">Читать <br /> в новом окне</a> </div>
                </div>
            </div>
        </div>
    );
};


Posts.propTypes = propTypes;


export default Posts;
