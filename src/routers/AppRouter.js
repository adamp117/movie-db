import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFavs';
import Search from '../components/Search';
import PageSingleMovie from '../pages/PageSingleMovie';

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Search />
        <main>
          <Switch>
            <Route path="/" exact><PageHome sort='popular' /></Route>
            <Route path="/sort/popular"><PageHome sort='popular' /></Route>
            <Route path="/sort/top-rated"><PageHome sort='top_rated' /></Route>
            <Route path="/sort/now-playing"><PageHome sort='now_playing' /></Route>
            <Route path="/sort/upcoming"><PageHome sort='upcoming' /></Route>
            <Route path="/about"><PageAbout /></Route>
            <Route path="/favs"><PageFavs /></Route>
            <Route path="/movie/:id"><PageSingleMovie /></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
