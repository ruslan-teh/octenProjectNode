import React from 'react';

const MovieInfo = ({item}) => {
    const {original_title, overview, release_date, vote_average} = item
    return (
        <div>
            <h2>{original_title}</h2>
            <h3>{overview}</h3>
            <p>Release Date {release_date}</p>
            <p>Vote Average {vote_average}</p>
        </div>

    );
};

export {MovieInfo};