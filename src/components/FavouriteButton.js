// FavouriteButtons
import useGlobal from '../store/globalAppState';


function FavouriteButton({ movie, checkFav }) {

    const [globalState, globalActions] = useGlobal();

    function isFav(id) {

        if (globalState.favs.length === 0) {
            return false;
        }
        // checks whether the movie is in the favs movie
        // array...
        return globalState.favs.some((movie) => movie.id === id);

    }

    return (
        <div className="favourite">
            {!checkFav || isFav(movie.id) ?
                <button className="btn-favourite"
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={() => { globalActions.removeFav(movie.id); }}>
                    <span className="fav-btn">Remove favourited movies</span>

                </button> :
                <button className="btn-favourite"
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={() => { globalActions.addFav(movie); }}>
                    <span className="fav-btn">Add to Favourites</span>

                </button>
            }
        </div>
    );
}

FavouriteButton.defaultProps = {
    checkFav: true
}

export default FavouriteButton;