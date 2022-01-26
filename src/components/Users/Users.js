import React, {useEffect, useState} from 'react';


import User from "../User/User";
import {usersService} from "../../services/users.service";

const Users = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        usersService.getAll().then(users => setUsers([...users]))
    }, [])


    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;