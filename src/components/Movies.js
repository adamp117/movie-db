import MovieCard from './MovieCard';


// import { Link } from 'react-router-dom';

function Movies({ movieData }) {

    return (
        <div className="movies-container">
            {movieData.map((oneMovie, i) => <MovieCard key={i} movieObj={oneMovie} />)}


        </div>

    )

}

export default Movies;
