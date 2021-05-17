import React from 'react';
import "./Header.css";
import SearchBar from "./SearchBar";
import {useHistory} from "react-router-dom";

const Header = () => {

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
            <div className="icons">
                <img src="/images/basket.png" alt="basket icon"/>
                <img src="/images/account.png" alt="account icon" onClick={goToUserProfilePage}/>
            </div>
        </div>
    );
}

export default Header;
