import { useEffect, useState, useRef } from "react"

export function useSearch() {
    const [search, setSearch] = useState('')
    const [error, setError] = useState(null)
    const firstRender = useRef(true)

    useEffect(() => {

        if (firstRender.current) {
            firstRender.current = search === '';
            return 
        }
        
        if(search === '') {
            setError('search empty');
            return
        }

        if(search.length < 3) {
            setError('Search short');
            return
        }

        setError(null);

    }, [search])
    
    return { search, setSearch, error }
}