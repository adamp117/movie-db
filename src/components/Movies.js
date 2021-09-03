import MovieCard from './MovieCard';


// import { Link } from 'react-router-dom';

function Movies({ movieData, isFav }) {
    return (
        <div className="movies-container">
            {movieData.map((oneMovie, i) => (
                <MovieCard
                    key={i}
                    movieObj={oneMovie}
                    isFav={isFav}
                />
            ))}
        </div>

    )

}

export default Movies;
