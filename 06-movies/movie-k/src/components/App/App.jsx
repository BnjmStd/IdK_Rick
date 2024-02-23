import { useState } from 'react';

/* style */
import './App.css';

/* custom hooks */
import { useMovie } from '../../hooks/useMovie';
import { useSearch } from '../../hooks/useSearch';

/* components  */
import Movies from '../Movies/Movies';

const App = () => {

    const [sort, setSort] = useState(false);

    const { search, setSearch, error } = useSearch();
    const { movie, getMovie, loading } = useMovie({ search, sort });

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSort = () => {
        setSort(!sort);
    };

    const sumbitForm = (e) => {
        e.preventDefault();
        getMovie({search})
    }

    return (
        <div className='page'>
            <header>

                <h1>Buscador de pelis</h1>
                <form onSubmit={sumbitForm}>
                    <input
                        style={{
                            border: '2px solid red',
                            borderColor: error ? 'red' : 'transparent' 
                        }}
                        value={search}
                        onChange={handleChange}
                        name='query'
                        type="text"
                        placeholder="Avengers ? ... "
                    />

                    <input  
                        type='checkbox' 
                        onChange={handleSort} 
                        checked={sort} 
                    >
                    </input>
                    <button type="submit">Buscar</button>
                    


                </form>
                {error ? <h3 className='error'> {error} </h3> : ''}
            </header>
            
            <main>
                {
                    loading ? <p>cargando ...</p> : <Movies movie={movie} /> 
                }

            </main>

        </div>
    )
}

export default App;
