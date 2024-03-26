import { Link } from 'react-router-dom'
import "../style/Header.css"


function Header() {
    return (
        <nav className="header-nav">
            <Link className="header-logo" to="/"><img src="https://dummyimage.com/100.png/09f/fff" /></Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
        </nav>
    )
}

export default Header