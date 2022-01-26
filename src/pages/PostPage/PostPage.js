import React from 'react';


import {Outlet} from "react-router-dom";
import Posts from "../../components/Posts/Posts";
import {} from '../PostPage/PostPage.css'

const PostPage = () => {
    return (
        <div className={'header'}>
            <Posts/>
            <Outlet/>
        </div>
    );
};

export default PostPage;