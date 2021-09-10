
export let movies = [
    {
        id :1,
        name : "jungwon",
        score : 0.1
    },
    {
        id :2,
        name : "jungwon",
        score : 5
    },
    {
        id :3,
        name : "jungwon",
        score : 0.2
    },
    {
        id :4,
        name : "jungwon",
        score : 4
    },
]

export const getMovies = () => movies

export const getById = id => {
    const filteredMovie = movies.filter(movie => movie.id === String(id))
    return filteredMovie[0]
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== String(id))
    if(movies.length > cleanedMovies.length) {
        movies = cleanedMovies
        return true
    } else {
        return false
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id : `${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie)
    return newMovie
}

