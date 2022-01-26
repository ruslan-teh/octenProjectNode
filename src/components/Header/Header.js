import React from 'react';
import {Link, Outlet} from "react-router-dom";

import {} from '../Header/Header.css'

const Header = () => {
    return (
        <div>
            <div className={'header'}>
                <Link to={'users'}>Users</Link>
                <Link to={'posts'}>Post</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default Header;