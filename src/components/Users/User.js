import React from 'react';

const User = ({name, username, email}) => {
    return (
        <div>
            <h2>Name - {name}</h2>
            <p>Username - {username}</p>
            <p>Email - {email}</p>
        </div>
    );
};

export default User;