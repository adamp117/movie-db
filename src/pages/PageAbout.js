import tmd_logo from '../images/tmd_logo.svg';


function PageAbout() {
    return (
        <main>
            <section className="about-page">
                <div className="about-info">
                    <h2>Welcome to Quick Flicks</h2>
                    <p>This is a movie database created by Robert Watt, Adam Paquette, and Sara Evans during the May 2021 intake of BCIT's Front End Web Development Program.
                        We invite you to browse for your favorite film and add it to your favourites.
                    </p>
                    <h3>The Movie Database</h3>
                    <p>All movie data comes from <em>The Movie Database (TMDB) website</em>
                    </p>
                    <img className="tmd-logo" src={tmd_logo} alt="tmd logo" />

                </div>
            </section>
        </main>



    );
}




export default PageAbout;
