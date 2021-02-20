import axios from "axios"

const url = 'http://localhost:3001/'

export default class ApiClient {

    userAction(method, url, data) {
        return axios({
            method,
            url,
            data
        })
        .catch(err => {
            throw err
        })
    }

    // add new film to database
    addFilm(newFilm) {
        return this.userAction('post', url, newFilm)
    }
    // get films from database
    getFilms() {
        return this.userAction('get', url)
    }
    // update film reaction
    updateFilmReactions(id, film) {
        return this.userAction('put', `${url}${id}`, film)
    }

}