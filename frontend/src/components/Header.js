import React from 'react';
import "./Header.css";
import SearchBar from "./SearchBar";
import logo from './MaCentre.png'

const Header = () => {



    return (
        <div className="header">
            <div className="logo">
                <img src={logo}/>
            </div>
            <SearchBar/>
            <div className="icons">
                <img src="/images/basket.png" alt="basket icon"/>
                <img src="/images/account.png" alt="account icon"/>
            </div>
        </div>
    );
}

export default Header;
