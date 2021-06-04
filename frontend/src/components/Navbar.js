import { Link } from "react-router-dom";
import "./Navbar.css";
import {useEffect} from "react";

const Navbar = ({loggedUser, userRole}) => {

    useEffect(() => {

    });


    return (
        <nav className="navbar">
            <div className="links">
                <Link to={"/"} style={{marginLeft: "0px"}}>Strona główna</Link>
                <Link to="/laptops">Laptopy</Link>
                <Link to="/phones">Telefony</Link>
                <Link to="/tablets">Tablety</Link>
                <Link to="/help" style={{marginRight: "0px"}}>Pomoc i kontakt</Link>
                {loggedUser && userRole === 'admin' && <Link to="/add-product">Dodaj produkt</Link>}
                {loggedUser && userRole === 'admin' && <Link to="/change-role">Użytkownicy</Link>}
            </div>
        </nav>
    )

}

export default Navbar;