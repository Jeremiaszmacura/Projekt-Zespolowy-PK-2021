import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css"
import axios from "axios";
import authentication from "../scripts/authentication";

class AdminSite extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mark: '',
            file: '',
            categoryId: '',
            price: '',
            description: '',
            quantity: '',
            vat: ''
        };
        this.handleFile = this.handleFile.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    handleFile = ({ target }) => {
        this.setState({ [target.name]: target.files[0] });
    };

    handleSubmit(event) {

        const data = new FormData();
        data.append("name", this.state.name);
        data.append("mark", this.state.mark);
        data.append("file", this.state.file);
        data.append("categoryId", this.state.categoryId);
        data.append("price", this.state.price);
        data.append("description", this.state.description);
        data.append("quantity", this.state.quantity);


        axios.post(`http://localhost:8080/products/`, data, {headers: {'Authorization': authentication.authenticationHeader()}})
            .then(res => {
                const token = res.data;
                if(token !== "blad"){
                    alert("Dodales produkt pomyslnie");
                } else {
                    throw Error("NIe dodano produktu");
                }
            })
            .catch(res =>{
                console.error(res);
                alert("Blad z dodaniem produktu");
            });
        event.preventDefault();
    }

    render() {
        return (
            <div className="loginRegister"> 
                <form className="loginRegisterForm" onSubmit={this.handleSubmit}>
                    <h2>Dodaj produkt!</h2>
                    <p>Nazwa</p>
                    <input className="loginRegisterFormInput" type="text" name="name" id="name" onChange={this.handleChange} />
                    <p>Marka</p>
                    <input className="loginRegisterFormInput" type="text" name="mark" id="mark" onChange={this.handleChange} />
                    <p>Opis</p>
                    <textarea className="loginRegisterFormInput" type="text" name="description" id="description" onChange={this.handleChange} />
                    <p>Ilość</p>
                    <input className="loginRegisterFormInput" type="number" name="quantity" id="quantity" onChange={this.handleChange} />
                    <p>Cena</p>
                    <input className="loginRegisterFormInput" type="number" name="price" id="price" onChange={this.handleChange} />
                    <p>Kategoria</p>
                    <input className="loginRegisterFormInput" type="number" name="categoryId" id="categoryId" onChange={this.handleChange} />
                    <p>Zdjęcie</p>
                    <input className="loginRegisterFormInput" type="file" name="file" id="file" accept="image/x-png,image/jpeg" onChange={this.handleChange} />
                    <input className="loginRegisterSubmit" type="submit" value="Dodaj produkt" />
                </form>
            </div>
        )
    }
}


export default AdminSite;

