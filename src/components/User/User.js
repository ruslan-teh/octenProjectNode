import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {

    const {id, name, username, email} = user;

    return (
        <div>
            <div>
                {name}
                <Link to={id.toString()} state={user}>
                    <button>User Detail</button>
                </Link>
                <Link to={`${id}/albums`} state={user}>
                    <button>User Albums</button>
                </Link>

            </div>
        </div>
    );
};

export default User;