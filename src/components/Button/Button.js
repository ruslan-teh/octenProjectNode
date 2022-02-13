import React from 'react';
import {Link, useLocation} from "react-router-dom";


import css from './Button.css'

const Button = ({to, state, disabled = false, isNav = false, children}) => {
    const {search} = useLocation();
    return (
        <Link to={to} state={state}>
            <button id={'buttonStyle'} disabled={disabled} className={isNav && search === to ? 'active' : ''}>{children}</button>
        </Link>
    );
};

export {Button};