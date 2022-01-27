import React, {useEffect, useState} from 'react';
import {postService} from '../../services/post.service';
import {useParams} from 'react-router-dom';
import UserPost from '../../components/UserPost/UserPost';


const UserPostPage = () => {

    const {id, posts} = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPost([...value]))
    }, [posts])


    return (
        <div>
            {posts &&
            post.filter(item => item.userId.toString() === id).map(item => <UserPost key={item.id} post={item}/>
            )}

        </div>
    );

};

export {UserPostPage};