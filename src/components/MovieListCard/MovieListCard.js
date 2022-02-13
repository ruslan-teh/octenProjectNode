import React from "react";

import css from './MovieListCard.css'
import {MovieInfo, PosterPreview} from '../index';


const MovieListCard = ({item}) => {
    return (
        <div className={'cardMovie'}>
            <PosterPreview item={item}/>
            <MovieInfo item={item}/>
        </div>
    );
};

export {MovieListCard};