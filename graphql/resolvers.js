import { getById, getMovies, addMovie } from "./db"

const resolver = {
    Query : {
        movies : () => getMovies(),
        movie : (_, { id}) => getById(id)
    },
    Mutation : {
        addMovie : (_, {name , score}) => addMovie(name, score)
    }
}




export default resolver