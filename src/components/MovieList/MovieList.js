import {Link} from "react-router-dom";

import css from './MovieList.css'
import {PosterPreview} from '../index';


const MovieList = ({item}) => {

    const {id, original_title} = item;

    return (
        <div className={'card'}>
            <div className={'cardImg'}>
                <Link to={`${id}`}>
                    <PosterPreview item={item}/>
                    <p>{original_title}</p>
                </Link>
            </div>
        </div>
    );
};

export {MovieList};