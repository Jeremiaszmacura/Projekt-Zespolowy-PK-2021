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
            houseNumber: '',
            apartmentNumber: '',
            phone: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    handleSubmit(event) {
        event.preventDefault();
        const userAll = {
            user: {
                email: this.state.email,
                password: this.state.password,
            },
            user_details: {
                first_name: this.state.firstName,
                last_name: this.state.lastName,
                country: this.state.country,
                city: this.state.city,
                code: this.state.code,
                street: this.state.street,
                house_number: this.state.houseNumber,
                apartment_number: this.state.apartmentNumber,
                phone: this.state.phone
            },
            
        }
        console.log(userAll);
        axios.post(`http://localhost:4000/users/register`, userAll)
            .then(res => {
                const token = res.data;
                console.log(token);
                alert("Udana rejestracja. Przeniesienie na stronę logowania");
                this.props.history.push('/login');
            })
            .catch(res =>{
                console.error(res);
                alert("Błąd z rejestracją. Powrót na stronę glówną");
                this.props.history.push('/');
            });

    }

    render() {
        return (
            <div className="loginRegister">
                <form className="loginRegisterForm" onSubmit={this.handleSubmit}>
                    <input className="loginRegisterFormInput" type="text" name="email" id="email" placeholder="E-mail" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="password" name="password" id="password" placeholder="Hasło" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="password" name="passwordAgain" id="passwordAgain" placeholder="Powtórzyć hasło" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" name="firstName" id="firstName" placeholder="Imie" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" name="lastName" id="lastName" placeholder="Nazwisko" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" name="country" id="country" placeholder="Kraj" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" name="city" id="city" placeholder="Miasto" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" name="code" id="code" placeholder="Kod pocztowy" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" name="street" id="street" placeholder="Ulica" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" pattern="[0-9]*" name="houseNumber" id="houseNumber" placeholder="Numer budynku" onChange={this.handleChange} />
                    <input className="loginRegisterFormInput" type="text" pattern="[0-9]*" name="apartmentNumber" id="apartmentNumber" placeholder="Numer mieszkania" onChange={this.handleChange} />
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

