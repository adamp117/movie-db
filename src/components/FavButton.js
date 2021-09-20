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
                <button className="btn" onClick={handleAddFav}>Add Fav</button> :
                <button className="btn" onClick={handleRemoveFav}>Remove</button>}
        </>
    );

}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;
