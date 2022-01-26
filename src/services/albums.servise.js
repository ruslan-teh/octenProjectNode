import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumsServise = {
    getAll:() => axiosService.get(`${urls.albums}`).then(value => value.data)
}