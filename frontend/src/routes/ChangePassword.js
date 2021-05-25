import React, {useState} from 'react';
import UserProfileSideBar from "../components/UserProfileSideBar";
import userService from "../services/userService";

const ChangePassword = () => {

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const saveNewPassword = (e) => {
        e.preventDefault();

        if(password && password.trim() != "" && password === passwordConfirm) {
            const newPassword = {
                password: password
            }

            userService.changeUserPassword(newPassword)
                .then(() => {
                    alert("Zmiany zostały zapisane!");
                })
        } else {
            alert("Hasła się różnią lub hasło jest puste!");
        }
    }

    return (
        <div className="main">
            <div className="sidebar">
                <UserProfileSideBar/>
            </div>
            <div className="user-details">
                <h1>Zmien hasło</h1>
                <form onSubmit={saveNewPassword}>
                    <div className="flex-container">
                        <label>Nowe Hasło</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="flex-container">
                        <label>Potwierdź nowe hasło</label>
                        <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)}/>
                    </div>
                    <button>Zapisz nowe hasło</button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
