import logo from '../images/logo_qf.svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="footer-info">

                <p>&copy; 2021 quick flicks inc</p>
                <p><strong>Created By: </strong> Robert Watt | Adam Paquette | Sara Evans</p>
                <div className="logo-block">
                    <Link to="/"><img src={logo} className="logo" alt="Quick Flicks Logo" /> </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;