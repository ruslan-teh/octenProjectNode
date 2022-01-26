import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";


import {postService} from "../../services/post.service";
import CommentsPage from "../PostCommentsPage/CommentsPage";

const PostDetailsPages = () => {

    const {id} = useParams();
    const {state} = useLocation();

    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        if (state) {
            setPostDetails(state)
            return
        }
        postService.getById(id).then(post => setPostDetails({...post}))
    }, [state, id])

    return (
        <div>
            {postDetails &&
            (<div><Link to={'comments'} element={<CommentsPage/>} state={postDetails}>Id: {postDetails.id}==={postDetails.title}</Link></div>)}
            <Outlet/>
        </div>
    );
};

export default PostDetailsPages;