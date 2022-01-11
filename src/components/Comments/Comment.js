import React from 'react';

const Comment = ({name, email, body}) => {
    return (
        <div>
            <h3>name --- {name}</h3>
            <p>email --- {email}</p>
            <p>body --- {body}</p>
        </div>
    );
};

export default Comment;