import {Link} from 'react-router-dom'
import "../style/Footer.css"

function Footer() {

    return(
    <nav className="footer-nav">
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
    </nav>
    )

}

export default Footer