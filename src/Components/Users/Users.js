import React, {useEffect, useState} from 'react';



import {userService} from "../../services/user.service";
import User from "./User";

const Users = ({click}) => {
    const [user, setUser] = useState([]);


    useEffect(() => {
        userService.getAll()
            .then(user => setUser(user))

    },[]);




    return (
        <div>
            {user.map(item => <User key={item.id}
                                    user={item}
                                    click={click}
            />)}
        </div>
    );
};

export default Users;