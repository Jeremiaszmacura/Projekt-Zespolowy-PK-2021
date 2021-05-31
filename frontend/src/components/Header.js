import React, {useEffect} from 'react';
import "./Header.css";
import SearchBar from "./SearchBar";
import {Link, useHistory} from "react-router-dom";
import authentication from "../scripts/authentication";
import Cookies from 'js-cookie';

const Header = ({loggedUser, setLoggedUser}) => {

    const history = useHistory();

    const goToUserProfilePage = () => {
        history.push('/user-profile/user-details');
    }

    const goToUserCart = () => {
        history.push('/cart');
    }

    return (
        <div className="header">
            <div className="logo">
                <img  className="medium" src="/images/MaCentre.png"/>
            </div>
            <SearchBar/>
            { !loggedUser &&
               <div className="links">
                   <Link to="login">Login</Link>
                   <Link to="register">Register</Link>
               </div>
            }
            { loggedUser &&
            <div className="loggedPanel">
                    <img src="/images/basket.png" alt="basket icon" onClick={goToUserCart}/>
                    <img src="/images/account.png" alt="account icon" onClick={goToUserProfilePage}/>
                <div className="links">
                    <Link  to="/"
                           onClick={ () => {
                               authentication.logout();
                               Cookies.remove('ids')
                               setLoggedUser(null);
                           }}>Logout</Link>
                </div>
            </div> }
        </div>
    );
}

export default Header;
