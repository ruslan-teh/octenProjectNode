import React, {useEffect, useState} from 'react';

import Comment from "./Comment";

const Comments = () => {

    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comment => setComment(comment))
    }, [])

    return (
        <div>
            {comment.map(comment => <Comment
                key = {comment.id}
                name = {comment.name}
                email = {comment.email}
                body = {comment.body}
            />)}
        </div>
    );
};

export default Comments;