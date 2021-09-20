// Page Favs
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import Movies from '../components/Movies';
import { appTitle } from '../globals/globalVariables';


function PageFavs() {

    // const globalStateAndActions = useGlobal();
    // const globalState = globalStateAndActions[0];

    const [globalState, globalActions] = useGlobal();
    const [ready, setReady] = useState(false);

    // useEffect(() => {
    //     document.title = `${appTitle} - Favs`;
    // }, []);

    useEffect(() => {

        globalActions.setFavs();

        setReady(true);

    }, [globalActions]);

    return (
        <main>
            <section className="favourite-info">
                <h2 className="fav-title">Favourite Movies</h2>
                {
                    globalState.favs && globalState.favs.length < 1
                        ? <p className="fav-text">
                            You have no favourite movies. You can search for your <Link to="/">favourite</Link> movie and add it to this page.
                        </p>
                        : (
                            <Movies
                                movieData={globalState.favs}
                                isFav={true}
                            />
                        )
                }
            </section>
        </main>
    );

}

export default PageFavs;
