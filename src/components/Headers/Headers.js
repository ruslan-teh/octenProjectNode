import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


import genreReducer, {genresAll, onGenreChange} from "../../store/genres.slice";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import css from './Header.css'
import {SwichTheme} from '../index';

const Headers = () => {

    const {genresMovie} = useSelector(state => state['genreReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresAll())
    }, [])

    return (
        <div className={'head'}>
            <Link className={'link'} to={'/'}>Home</Link>

            <label>
                <select className={'select'} onChange={(e) => dispatch(onGenreChange(e.target.value))}>
                    <option value='all'> All Genres</option>
                    {genresMovie.map(item => <GenreBadge key={item.id} item={item}/>)}
                </select>
            </label>
            <SwichTheme/>
        </div>
    )
};

export {Headers};