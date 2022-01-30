import React from 'react';

const Cats = ({cats, deleteCat}) => {
    return (
        <div>
            {cats.map(({id, name}) => <div key={id}>
                {name}===<button onClick={() => deleteCat(id)}>delete</button>
            </div>)}
        </div>
    );
};

export default Cats;