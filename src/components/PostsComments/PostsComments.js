import React from 'react';

const PostsComments = ({comment}) => {
    const {id , body} = comment
    return (
        <div>
            <p>{id}--{body}</p>
        </div>
    );
};

export default PostsComments;