import React, {useEffect} from 'react';
import "./Header.css";
import SearchBar from "./SearchBar";
import {Link, useHistory} from "react-router-dom";
import authentication from "../scripts/authentication";

const Header = ({loggedUser, setLoggedUser}) => {

    const history = useHistory();

    const goToUserProfilePage = () => {
        history.push('/user-profile/user-details');
    }

    return (
        <div className="header">
            <div className="logo">
                <img src="/images/MaCentre.png"/>
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
                    <img src="/images/basket.png" alt="basket icon"/>
                    <img src="/images/account.png" alt="account icon" onClick={goToUserProfilePage}/>
                <div className="links">
                    <Link  to="/"
                           onClick={ () => {
                               authentication.logout();
                               setLoggedUser(null);
                           }}>Logout</Link>
                </div>
            </div> }
        </div>
    );
}

export default Header;
