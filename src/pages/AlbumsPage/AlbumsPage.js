import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";
import {} from '../AlbumsPage/AlbumsPage.css'

import {albumsServise} from "../../services/albums.servise";

const AlbumsPage = () => {

    const {id} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsServise.getAll().then(value => setAlbums(value))
    }, [])

    return (
        <div>
            {id && (albums.filter(item => item.userId.toString() === id)).map(value =>
            <div key={value.id} className={'album'}>
                <h2>id: {value.id}</h2>
                <h3>AlbumId: {value.userId}</h3>
                <p>title: {value.title}</p>
                <Link to={'photos'} state={value}> <button>Photo</button></Link>
            </div>
            )}

            <Outlet/>

        </div>
    );
};

export default AlbumsPage;