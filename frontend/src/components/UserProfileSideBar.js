import React from 'react';
import {Link, useHistory} from "react-router-dom";
import './UserProfileSideBar.css';

const UserProfileSideBar = () => {

    const history = useHistory();

    const menuItems = [
        {title: "Moje dane", link: "/user-profile/user-details"},
        {title: "Moje zakupy", link: "/user-profile/user-orders"}
    ]

    const goTo = (link) => {
        history.push(link);
    }

    return (
        <div className="side-bar">
            <ul className="side-bar-list">
                {menuItems.map((item, key) => {
                    return (<li key={key} className="row" onClick={() => goTo(item.link)}>
                        <div>{item.title}</div>
                    </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default UserProfileSideBar;
