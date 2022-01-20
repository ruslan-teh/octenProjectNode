import React, {useEffect, useState} from 'react';
import Users from "./Components/Users/Users";
import Form from "./Components/Form/Form";
import {userService} from "./services/user.service";

const App = () => {

    const [user, setUser] = useState([]);
    const [filterUser, setFilterUser] = useState([]);

    useEffect(() => {
        userService.userUrl()
            .then(item => {
                    setUser([...item])
                    setFilterUser([...item])

                }
            )
    }, [])

    const getFilterUser = (info) => {

        let filtered = [...user]


        if (info.name) {
            filtered = filtered.filter(user => user.name.toLowerCase().includes(info.name.toLowerCase()));
        }
        if (info.username) {
            filtered = filtered.filter(user => user.username.toLowerCase().includes(info.username.toLowerCase()));
        }
        if (info.email) {
            filtered = filtered.filter(user => user.email.toLowerCase().includes(info.email.toLowerCase()));
        }
        setFilterUser(filtered)


    }

    return (

        <div>
            <Form getFilter={getFilterUser}/>
            <Users users={filterUser}/>
        </div>
    );
};

export default App;