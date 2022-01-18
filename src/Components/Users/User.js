import React from 'react';



const User = ({user,click}) => {
    const {id, name, email} = user;

    return (
        <div>
            <p>{id}--{name}--{email} ==><button onClick={()=>{click(user)}}>get post</button></p>
        </div>
    );
}

export default User;