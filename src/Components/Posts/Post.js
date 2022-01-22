import React from 'react';

const Post = ({postId, id, title, body}) => {
    return (
        <div>
            <p>userId--{postId}  id---{id}  title--{title}  body--{body}</p>
        </div>
    );
};

export default Post;