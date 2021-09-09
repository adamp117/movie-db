import logo from '../images/quick-flicks_logo_2.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-info">

                <p>&copy; 2021 quick flicks inc</p>
                <p><strong>Created By: </strong> Robert Watt, Adam Paquette, and Sara Evans</p>
                <Link to="/"><img src={logo} className="logo" alt="Quick Flicks Logo" /> </Link>
            </div>
        </footer>
    )
}

export default Footer;