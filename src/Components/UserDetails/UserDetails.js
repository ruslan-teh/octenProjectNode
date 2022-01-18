import React from 'react';

const UserDetails = ({user, getUserId}) => {
    return (
        <div>
            {user && <div>{user.id}) {user.name} {user.email}==>
                <button onClick={() => getUserId(user.id)}>Posts</button></div>}
        </div>
    );
};

export default UserDetails;