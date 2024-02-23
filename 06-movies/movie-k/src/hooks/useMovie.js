
import { useRef, useState, useMemo, useCallback } from 'react';
import { searchMovies } from '../services/movies';

export function useMovie({ search, sort }) {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const previusSearch = useRef(search);

    const getMovie = useCallback(async ({ search }) => {
        try {
            if (search === previusSearch.current) return;

            setLoading(true);
            const newMovies = await searchMovies({ search });
            setMovie(newMovies);
            previusSearch.current = search;
        } catch (error) {
            console.error("Error al obtener películas:", error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    const sortedMovies = useMemo(() => {
        return sort
            ? [...movie].sort((a, b) => a.title.localeCompare(b.title))
            : movie;
    }, [movie, sort])

    return { movie: sortedMovies, getMovie, loading };
}