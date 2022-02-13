import React from 'react';



const GenreBadge = ({item}) => {
    const {name,id} = item
    return (
        <>
            <option value={id}>
                {name}
            </option>
        </>
    );
};

export {GenreBadge};