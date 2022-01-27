import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';


import '../PhotosPage/PhotosPage.css'
import {photoService} from '../../services/photo.service';

const PhotosPage = () => {

    const {state} = useLocation();


    const [photos, setPhotos] = useState([]);

    useEffect(()=>{
        photoService.getAllById(state.id).then(value => setPhotos(value))
    },[])

    const photoArr = photos.filter(value => value.albumId === state.id)


    return (
        <div>
            {state.id && photoArr.map(value =>
            <div key={value.id}>
                <p>id: {value.id}</p>
                <img className={'imgStyle'} src={value.url} alt=""/>
            </div>
            )}

        </div>
    );
};

export {PhotosPage};