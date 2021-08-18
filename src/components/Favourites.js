// Favourites
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import Movies from './Movies';

function Favourites() {

  const [globalState, globalActions] = useGlobal();
  
  const [ready, setReady] = useState(false);

  useEffect(() => {
    console.log('hello');
    globalActions.setFavs();
    setReady(true);
  }, [globalActions]);

  return (
    <main>
      <section>
        <h2 className="fav-title">Your Favorite Movies</h2>
        {globalState.favs.length === 0 ?
          <p className="fav-no-text">No favourited movies. Please visit the <Link to={'/'}>home page</Link> to favourite a movie.</p> :
          (ready && <Movies movies={globalState.favs} checkFav={true} />)
        }
      </section>
    </main>
  );
}

export default Favourites;
