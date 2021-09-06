import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import useGlobal from '../store/globalAppState';
import FavButton from './FavButton';
// import heartImage from '../images/heart.png';


function MovieCard({ movieObj, isFav }) {

    const globalStateAndglobalActions = useGlobal();
    const globalActions = globalStateAndglobalActions[1];

    function handleFavClick(addToFav, obj) {
        if (addToFav === true) {
            globalActions.addFav(obj);
        } else {
            globalActions.removeFav(obj.id);
        }
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movieObj.poster_path === null ?
                    <img src={noPoster} alt="No poster" /> :
                    <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={movieObj.title} />
                }

            </div>
            <div className="movie-overlay">
                <div className="movie-box">
                    <div className="rating">{movieObj.vote_average * 10}%</div>
                    <p>{movieObj.release_date}</p>
                </div>
                <div className="movie-info">
                    <h3>{movieObj.title.length > 19 ? `${movieObj.title.substring(0, 19)}...` : movieObj.title}</h3>

                    <p>{movieObj.overview.length > 200 ? `${movieObj.overview.substring(0, 200)}...` : movieObj.overview}</p>
                    <Link className="more-info" to={`/movie/${movieObj.id}`}>More Info</Link>


                </div>
                <div className="movie-box">
                    {/* <div className="heart-container">
                        {isFav &&
                            <div className="heart">
                                <img
                                    src={heartImage}
                                    alt="Heart"
                                    style={{
                                        height: '20px',
                                        width: '20px',
                                        marginLeft: '20px',
                                        position: 'relative',
                                    }}
                                />
                            </div>} */}
                    <div className="btn-favourite">
                        {isFav ?
                            <FavButton movieObj={movieObj} remove={true} handleFavClick={handleFavClick} /> :
                            <FavButton movieObj={movieObj} handleFavClick={handleFavClick} />
                        }
                    </div>
                </div>
            </div>
        </div>



        // {/* <div className="movie">
        //     <h3>{movieObj.title}</h3>
        //     <Link to={`/movie/${movieObj.id}`}>More Info</Link>
        // </div> */}

    );
}

export default MovieCard;
{/* <div className="movie-grid">
                        {movieData.map((oneMovie, i) => {
                            return <Movies key={i}
                                movieObj={oneMovie}
                                isFav={isFav(globalState.favs, null, oneMovie.id)} />
                        })} */}