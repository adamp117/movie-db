import { Link } from 'react-router-dom';
import NavMain from './NavMain';
import logo from '../images/quick-flicks_logo.png';

function Header() {
    return (
        <header>
            <Link to="/"><img src={logo} className="logo" alt="Quick Flicks Logo" /> </Link>
            <NavMain />
        </header >
    )
}

export default Header;