import { useState, useEffect } from "react";


export default function MovieTe() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('spider man');


useEffect (() => {
    const fetchMovies = async () => {
        setLoading(true);
        try {
            const response = await 
            fetch(`https://www.omdbapi.com/?s=${query}&apikey=b5381b2e`);
            const data = await response.json();
            if (data.Response ==='true') {
                setMovies(data.Search);
            } else {
                setMovies ([]);
            }
        } catch (error) {
            console.error("Erro ao Buscar Filme", error);
        } finally {
            setLoading(false);
        }
    };

    const delayDebounceFn = setTimeout (() => {
        if(query.trim()  !== '') {
            fetchMovies();
        } else {
            setMovies ([]);
        }
    }, 800);

    return () => clearTimeout(delayDebounceFn);
}, [query]);

return(
    <div className="card">
        <h2> Nivel Médio: Consumo de API OMDb com debouncer</h2>
        <p> Buscar filmes assim que você parar de digitar.</p>
        <input 
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="buscar filme..."
        />
    
    {loading 
    ? <p>Carregando Filme</p>
    : movies.length > 0
    ? <ul className="movie-list">
        {movies.map((movie) => (
            <li key={movie.imdbID}>
             <strong>{movie.Title}</strong> ({movie.Year})
        </li>
    ))}
</ul>
: <p>Nenhum filme encontrado.</p>
}
</div>

);
}
    