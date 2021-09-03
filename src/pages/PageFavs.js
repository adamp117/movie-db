// Page Favs
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import Movies from '../components/Movies';
import { appTitle } from '../globals/globalVariables';


function PageFavs() {

    const globalStateAndActions = useGlobal();
    const globalState = globalStateAndActions[0];

    useEffect(() => {
        document.title = `${appTitle} - Favs`;
    }, []);

    return (
        <main>
            <section>
                <h2>Favourite Movies</h2>
                {
                    globalState.favs && globalState.favs.length < 1
                        ?   <p>
                                No favourite movies. Return to the
                                <Link to="/">home</Link> page to add some favourite movies.
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
