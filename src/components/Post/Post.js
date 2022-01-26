import React from 'react';
import {Link} from "react-router-dom";


const Post = ({post}) => {

    const {id, title} = post

    return (
        <div>
            <Link to={id.toString()} state={post} >id: {id} --- title: {title}</Link>
        </div>
    );
};

export default Post;