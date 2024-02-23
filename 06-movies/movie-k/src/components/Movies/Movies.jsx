import PropTypes from 'prop-types';

function ListOfMovies({ movies }) {
    return (
        <ul className='movies'>
            {
                movies.map(movie => (
                    <li className='movie' key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.image} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResults() {
    return (
        <p>  no pelis</p>
    )
}

export default function Movies({ movie }) {
    const hasMovies = movie?.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movie} />
            : <NoMoviesResults />
    )
}


Movies.propTypes = {
    movie: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            year: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
}

ListOfMovies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            year: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        })
    ).isRequired,
};