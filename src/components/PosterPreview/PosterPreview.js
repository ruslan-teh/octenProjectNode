import React from 'react';
import {urls} from "../../services/urls";

const PosterPreview = ({item}) => {
    return (
        <div>
            <img src={urls.getImg + item.backdrop_path} alt={item.original_title}/>
        </div>
    );
};

export {PosterPreview};