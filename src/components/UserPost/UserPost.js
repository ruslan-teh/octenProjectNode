import React from 'react';

const UserPost = ({post}) => {
    const {userId ,title} = post
    return (
        <div>
            <p>{userId}--{title}</p>
        </div>
    );
};

export default UserPost;