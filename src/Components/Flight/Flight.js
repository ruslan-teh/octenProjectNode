import React from 'react';

import './Flight.css'

const Flight = ({name, year, img}) => {
    return (
        <div className={'container'}>
            <div>
                <h2>{name}</h2>
                <p>{year}</p>
            </div>
            <img src={img} alt="name"/>

        </div>
    );
};

export default Flight;