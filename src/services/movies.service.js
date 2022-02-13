import axiosService from "./axios.service";

import {urls} from "./urls";

export const moviesService = {
    getAll: (page) => axiosService.get(urls.getMovie(page)).then(value => value.data),
    getOne: (id) => axiosService.get(urls.getOneMovie(id)).then(value => value.data),
    getImage: (id) => axiosService.get(urls.getImage(id)).then(value => value.data)
}
