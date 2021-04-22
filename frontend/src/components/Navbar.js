import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Strona główna</Link>
                <Link to="/laptops">Laptopy</Link>
                <Link to="phones">Telefony</Link>
                <Link to="tablets">Tablety</Link>
                <Link to="help">Pomoc i kontakt</Link>
            </div>
        </nav>
    )

}

export default Navbar;