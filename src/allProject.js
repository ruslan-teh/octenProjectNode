import React from 'react';


import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

import './allProject.css'

const AllProject = () => {
    return (
        <div>
            <div className={'upList'}>
                <div className={'item'}>
                    <Users/>
                </div>
                <div className={'item'}>
                    <Posts/>
                </div>
            </div>
            <div className={'comments'}>
                <Comments/>
            </div>
        </div>
    );
};

export default AllProject;