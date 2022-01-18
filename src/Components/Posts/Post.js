import React from 'react';

const Post = ({userId, id, title, body}) => {
    return (
        <div>
            <p>userId--{userId}  id---{id}  title--{title}  body--{body}</p>
        </div>
    );
};

export default Post;