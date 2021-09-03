import { useEffect, useState } from 'react';
import NavSort from '../components/NavSort';
import Movies from '../components/Movies';
import { API_TOKEN } from '../globals/globalVariables';
import Search from '../components/Search';
import useGlobal from '../store/globalAppState';
import isFav from '../utilities/isFav';

function PageHome({ sort }) {
    const globalStateAndglobalActions = useGlobal();
    const globalState = globalStateAndglobalActions[0];

    const [movieData, setMovieData] = useState(null);

    // Add some state to track if there is a search query:
    const [hasQuery, setHasQuery] = useState(false);

    // Pass this into Search. It will call the function like so
    // in its onChange handler:
    //   props.onQuery(e.target.value)
    //
    // So the function param query == e.target.value.
    // Now you can decide to set a local variable that tracks
    // whether or not a search query is present, and use this
    // to hide/show the Home component (see render below)
    const onQuery = (query) => {
        if (!!query) {
            setHasQuery(true);
        } else {
            setHasQuery(false);
        }
    }

    useEffect(() => {

        const fetchMovies = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${sort}?&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });

            let rawMovieData = await res.json();
            rawMovieData = rawMovieData.results.splice(0, 12);
            setMovieData(rawMovieData);

        }

        fetchMovies();


    }, [sort]);


    return (

        <section className="home-page">
            <Search
                onQuery={onQuery}
            />
            <NavSort />
            {movieData !== null && !hasQuery && (
                <Movies movieData={movieData} />
            )}
        </section>
    )
}

export default PageHome;
