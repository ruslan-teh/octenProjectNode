import React from 'react';

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div>
            <p>{id}) {name}-{username} -- {email}</p>

        </div>
    );
};

export default User;