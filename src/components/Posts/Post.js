import React from 'react';
import './post.css'

const Post = ({userId, id, title, body}) => {
    return (
        <div className={'bacr'}>
            <h3>userId -- {userId}</h3>
            <p>Id -- {id}</p>
            <p>Title -- {title}</p>
            <p>Body -- {body}</p>

        </div>
    );
};

export default Post;