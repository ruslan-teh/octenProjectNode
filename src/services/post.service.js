import {urls} from "../config/urls";

const getAllPost = (id) => {
    return fetch(`${urls.posts}?userId=${id}`)
        .then(value => value.json());
}


export const postService = {
    getAllPost
}