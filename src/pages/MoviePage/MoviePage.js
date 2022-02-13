import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {MovieList, Paginator} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../../store";
import css from './MoviePage.css'


const MoviePage = () => {
    const {movies} = useSelector(state => state['movieReducer']);
    const {genresChange} = useSelector(state => state['genreReducer'])
    const dispatch = useDispatch();

    const idGenre = Number(genresChange)


    const genreMovie = (id) => {
        if (!id) {
            return movies
        } else {
            return movies.filter(item => item.genre_ids.includes(id))
        }
    }

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {

        if (!searchParams.get('page')) {
            setSearchParams({page: '1'})
        }

        const page = searchParams.get('page');

        dispatch(getAllMovies({page}))

    }, [searchParams])


    return (

        <div className={'cardWrap'}>

            <div className={'cardList'}>
                <div className={'item'}>
                    {movies && genreMovie(idGenre).map(item => <MovieList key={item.id} item={item}/>)}
                </div>
            </div>

            <div className={'navigateButton'}>
                <Paginator searchParams={searchParams}/>
            </div>
        </div>

    );
};

export {MoviePage};