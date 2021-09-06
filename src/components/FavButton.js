// Fav Button

function FavButton({ movieObj, remove, handleFavClick }) {

    function handleAddFav() {
        handleFavClick(true, movieObj);
    }

    function handleRemoveFav() {
        handleFavClick(false, movieObj);
    }

    return (
        <>
            {remove === false ?
                <button className="btn" onClick={handleAddFav}>Add To Favs</button> :
                <button className="btn" onClick={handleRemoveFav}>Remove From Favs</button>}
        </>
    );

}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
