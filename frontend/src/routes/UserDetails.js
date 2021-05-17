import React from 'react';
import UserProfileSideBar from "../components/UserProfileSideBar";
import './UserDetails.css';

const UserDetails = ({userDetails}) => {

    return (
        <div className="main">
            <div className="sidebar">
                <UserProfileSideBar/>
            </div>
            <div className="user-details">

            </div>
        </div>
    );
};

export default UserDetails;