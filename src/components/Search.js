
import { API_KEY } from '../globals/globals.js'
import MovieCard from './MovieCard.js';
import { useState } from 'react';

function Search() {
    const [query, setQuery] = useState("");
    const [result, setResults] = useState([]);
    const onChange = (e) => {
        e.preventDefault();
        setQuery(e.target.value);
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=false`
        )
            .then((res) => {
                return res.json()
            }).then((data) => {
                if (!data.errors) {
                    setResults(data.results);
                }
                else {
                    setResults([]);
                }
            });
    }
    return (
        <div className="search-feature">
            <div className="search-container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type='text'
                            placeholder="Search"
                            value={query}
                            onChange={(event) => onChange(event)}
                        />
                    </div>
                    {result.length > 0 && (
                        <ul className="results">
                            {result.map((movieObj) => (
                                <li key={movieObj.id}>
                                    <MovieCard movieObj={movieObj} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search


