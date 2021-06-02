import React, { Component, useState } from "react";
import "./Login.css"
import axios from "axios";
import authentication from "../scripts/authentication";
import User from "../components/user";

class ChangeRole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            users: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    componentDidMount() {
        axios.get(`http://localhost:4000/users/allUsers`,{ headers: { 'Authorization': authentication.authenticationHeader() } })
            .then(res => {
                const users = res.data;
                this.setState({ users });
                const userId = res.data[0].id;
                this.setState({ userId });
                if (!userId){
                    alert("Brak użytkowników");
                    this.props.history.push('/');
                }
            });
    }

    handleChange = ({ target }) => {
        const userId = target.value;
        this.setState({ userId });
    };

    handleSubmit(event) {

        let userId = this.state.userId;
        let url = `http://localhost:4000/users/setAdmin/` + userId;
        axios.post(url,null, { headers: { 'Authorization': authentication.authenticationHeader() } })
            .then(res => {
                const token = res.data;
                if (token !== "blad") {
                    alert("Zmieniłeś role");
                } else {
                    throw Error("Nie zmieniono roli");
                }
            })
            .catch(res => {
                console.error(res);
                alert("Blad ze zmianą roli");
            });
        event.preventDefault();
    }

    render() {

        return (
            <div className="loginRegister">
                <form className="loginRegisterForm" onSubmit={this.handleSubmit}>
                    <h2>Wybierz użytkownika</h2>
                    <select className="loginRegisterFormInput" value={this.state.userId} onChange={this.handleChange} >
                        {this.state.users.map(user => (
                            <User name={user.email} id={user.id} />
                        ))}
                    </select>
                    <p>Potwierdź zmianę</p>
                    <input className="loginRegisterSubmit" type="submit" value="Click me" />
                </form>
            </div>
        );
    }
}

export default ChangeRole;