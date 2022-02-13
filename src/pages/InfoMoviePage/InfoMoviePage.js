import React from 'react';
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {urls} from "../../services/urls";
import {MovieListCard} from "../../components";

const InfoMoviePage = () => {
    const {movies} = useSelector(state => state['movieReducer']);
    const id = useLocation();
    const movieId = Number(id.pathname.split('/').pop());
    const filterMovie = movies.filter(item => item.id === movieId);

    return (
        <div>
            {movies && filterMovie.map(item => <MovieListCard key={item.id} item={item}/>)}
        </div>
    );
};

export {InfoMoviePage};