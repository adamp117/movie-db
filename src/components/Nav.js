import { NavLink } from 'react-router-dom';

const Nav = ({ handleShowHideNav }) => {
    
    function closeNav(e){
        if(window.innerWidth < 600){
            handleShowHideNav();
        }else{
            e.target.blur();
        }
    }

    return (

        <nav className="main-nav" onClick={closeNav}>
            <ul>
                <li>
                    <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/favs">Favs</NavLink>
                </li>
                <li>
                    <NavLink to="/sort/popular">Popular</NavLink>
                </li>
                <li>
                    <NavLink to="/sort/top-rated">Top Rated</NavLink>
                </li>
                <li>
                    <NavLink to="/sort/now-playing">Now Playing</NavLink>
                </li>
                <li>
                    <NavLink to="/sort/upcoming">Upcoming</NavLink>
                </li>
            </ul>
        </nav>
    );
    
};


export default Nav;