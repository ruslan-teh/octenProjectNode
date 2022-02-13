const baseURL = 'https://api.themoviedb.org/3';

const apiKey = 'api_key=964e2fbb7bd73102dda74ac127763ed6'

export const urls = {
    getMovie:(page) => `/discover/movie?${apiKey}&language=en-US&page=${page}`,
    getGenres: `/genre/movie/list?${apiKey}&language=en-US`,
    getImage: (id) => `/movie/${id}/images?${apiKey}&language=en-US`,
    getImg: 'https://image.tmdb.org/t/p/w500'
}

export default baseURL


