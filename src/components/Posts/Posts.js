import React, {useEffect, useState} from 'react';


import {postService} from "../../services/post.service";
import Post from "../Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(posts => setPosts([...posts]))
    }, [])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;