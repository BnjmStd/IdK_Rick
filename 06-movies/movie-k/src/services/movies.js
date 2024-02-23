const API_KEY = '6a2512c4'

export async function searchMovies ({ search }) {

    if (search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search
        
        return movies
        ? movies.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster
        }))
        : [];
    } catch (e) {
        
        throw new Error('Error searching movies')
    }

}