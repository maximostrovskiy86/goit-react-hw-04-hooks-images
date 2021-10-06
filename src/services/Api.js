const BASE_URL = "https://pixabay.com/api/?";
const API_KEY = "23297096-fdec21a8bcbab7faa251f0233";

const fetchQueryApi = (inputValue) => {
    return fetch(BASE_URL + `q=${inputValue}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
            return response.json();
        });
}

const fetchLoadMore = (value, page) => {
    return fetch(BASE_URL + `q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json());
}

export default {
    fetchQueryApi,
    fetchLoadMore,
}