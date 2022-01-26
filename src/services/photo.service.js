import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const photoService = {
    getAllById: (id) => axiosService(`${urls.photos}?albumsId=${id}`).then(value => value.data)
}