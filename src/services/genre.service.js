import axiosService from "./axios.service";

import {urls} from "./urls";


export const genreService = {
    getAll:() => axiosService.get(urls.getGenres).then(value => value.data)
}