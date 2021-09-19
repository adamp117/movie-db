import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../images/quick-flicks_logo_2.png';


const Header = () => {

    const [navOpen, setNavOpen] = useState(false);

    const showHideNav = () => {
        setNavOpen(!navOpen);
    }
   
    const isDesktop = (e) => {
        if(e.matches){
            setNavOpen(false);
        }
    }
    
    useEffect(() => {
          let mediaQuery = window.matchMedia('(min-width: 600px)');
          mediaQuery.addListener(isDesktop);
          // this is the cleanup function to remove the listener
          return () => mediaQuery.removeListener(isDesktop);
    }, []);


    return (
        <header className={navOpen ? 'show' : undefined}>
            {/* <h1><a href="#0">{appTitle}</a></h1> */}

            {/**
             * HTML for the Hamburger icon modified from HTMl 
             * found at this codepen:
             * https://codepen.io/RRoberts/pen/ZBYaJr
             */}
             <Link to="/"><img src={logo} className="logo" alt="Quick Flicks Logo" /> </Link>
            <button className="btn-main-nav" 
                    onMouseDown={(e) => { e.preventDefault(); }}
                    onClick={showHideNav}>
                <span className="hamburger-icon">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </span>
                <span className="sr-only">Menu</span>
            </button>
            <Nav handleShowHideNav={showHideNav} />
            
        </header>
    );
    
};

export default Header;