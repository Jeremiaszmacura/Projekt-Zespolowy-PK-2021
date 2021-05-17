import React from 'react';
import "./Header.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="/images/MaCentre.png"/>
            </div>
            <SearchBar/>
            <div className="icons">
                <Link to="/">
                <img src="/images/basket.png" alt="basket icon"/>
                </Link>
                <Link to="/login">
                <img src="/images/account.png" alt="account icon"/>
                </Link>
            </div>
        </div>
    );
}

export default Header;
