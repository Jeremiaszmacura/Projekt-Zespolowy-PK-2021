import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import axios from "axios";

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordAgain: '',
            firstName: '',
            lastName: '',
            country: '',
            city: '',
            code: '',
            street: '',
            number: '',
            phone: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    handleSubmit(event) {
        const userAll = {
            user: {
                email: this.state.email,
                password: this.state.password,
            },
            userDetails: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                country: this.state.country,
                code: this.state.code,
                street: this.state.street,
                number: this.state.number,
                phone: this.state.phone
            },
            
        }
        console.log(userAll);
        axios.post(`http://localhost:8080/users/`, userAll)
            .then(res => {
                const token = res.data;
                console.log(token);
                alert("Udana rejestracja. przeniesienia na stronę logowania");
                this.props.history.push('/login');
            })
            .catch(res =>{
                console.error(res);
                alert("Błąd z rejestracją. Powrót na stronę glówną");
                this.props.history.push('/');
            });
        event.preventDefault();     
    }

    render() {
        return (
            <div className="loginRegister">
                <form className="loginRegisterForm" onSubmit={this.handleSubmit}>
                    <input className="loginRegisterFormInput" type="text" name="email" id="email" placeholder="E-mail" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="password" name="password" id="password" placeholder="Hasło" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="password2" name="passwordAgain" id="passwordAgain" placeholder="Powtórzyć hasło" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" name="firstName" id="firstName" placeholder="Imie" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" name="lastName" id="lastName" placeholder="Nazwisko" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" name="country" id="country" placeholder="Kraj" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" name="city" id="city" placeholder="Miasto" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" name="code" id="code" placeholder="Kod pocztowy" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" name="street" id="street" placeholder="Ulica" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" pattern="[0-9]*" name="number" id="number" placeholder="Numer mieszkania" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" pattern="[0-9]*" name="phone" id="phone" placeholder="Numer telefonu" onChange={this.handleChange} />
                    <input className="loginRegisterSubmit" type="submit" value="Sign in" />
                </form>
                <div className="toLoginRegister">
                    <h2 className="toLR">Masz już konto? Zaloguj się!</h2>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        )
    }
}

export default Register;

