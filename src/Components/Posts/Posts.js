import React, {useEffect, useState} from 'react';


import {postService} from "../../services/post.service";
import Post from "../Posts/Post";

const Posts = ({posts}) => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        setPost(posts)

    },[posts]);


    return (
        <div>
            {post.map(item => <Post key={item.id}
                                    id={item.id}
                                    userId={item.userId}
                                    title={item.title}
                                    body={item.body}
            />)}
        </div>
    );
};

export default Posts;
