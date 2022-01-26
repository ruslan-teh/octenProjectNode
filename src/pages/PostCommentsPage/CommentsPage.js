import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";


import {commentsService} from "../../services/comments.service";
import PostsComments from "../../components/PostsComments/PostsComments";

const CommentsPage = () => {

    const {id, comments} = useParams();
    const [comment, setComment] = useState([]);

    useEffect(() => {
        commentsService.getAll()
            .then(value => setComment([...value]))
    }, [])
    const newArr = comment.filter(value => value.postId.toString() === id)
    return (
        <div>
            {comments && newArr.map(item => (
                <div key={item.id}>
                    <div>id: {item.id}</div>
                    <div>Body: {item.body}</div>
                </div>

            ))}
        </div>
    );
};

export default CommentsPage;