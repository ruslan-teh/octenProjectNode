import React from 'react';

const Dogs = ({dogs, deleteDog}) => {
    return (
        <div>
            {dogs.map(({id, name}) => <div key={id}>
                {name}===<button onClick={() => deleteDog(id)}>delete</button>
            </div>)}
        </div>
    );
};

export default Dogs;