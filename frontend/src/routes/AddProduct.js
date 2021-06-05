import React, { useState } from "react";
import "./Login.css"
import axios from "axios";
import authentication from "../scripts/authentication";
import { storage } from "../firebase";

const AdminSite = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [mark, setMark] = useState("");
    const [category, setCategory] = useState("1");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(false);
    const [name, setName] = useState("");
    const [status,setStatus] = useState(false);

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
      
    const handleFile = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const uploadFile = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => { 
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(thisurl => {
                        console.log(thisurl);
                        setUrl(thisurl);                       
                        
                        const product = {
                            name: name,
                            mark: mark,
                            src: thisurl,
                            categoryId: category,
                            price: price,
                            description: description,
                            quantity: quantity
                        }
                        console.log(product);
                        axios.post(`http://localhost:4000/products/`, product, {headers: {'Authorization': authentication.authenticationHeader()}})
                            .then(res => {
                                const token = res.data;
                                if(token !== "blad"){
                                    alert("Dodales produkt pomyslnie");
                                } else {
                                    throw Error("Nie dodano produktu");
                                }
                            })
                            .catch(res =>{
                                console.error(res);
                                alert("Blad z dodaniem produktu");
                            });
                           
                    })
            }
        );
    }

     const handleSubmit = async event => {
        
        uploadFile();
        event.preventDefault();
    }
        
        return (
            <div className="loginRegister"> 
                <form className="loginRegisterForm" onSubmit={handleSubmit}>
                    <h2>Dodaj produkt!</h2>
                    <p>Nazwa</p>
                    <input className="loginRegisterFormInput" type="text" name="name" id="name" onChange={e => setName(e.target.value)}  />
                    <p>Marka</p>
                    <input className="loginRegisterFormInput" type="text" name="mark" id="mark" onChange={e => setMark(e.target.value)}  />
                    <p>Opis</p>
                    <textarea className="loginRegisterFormInput" type="text" name="description" id="description" onChange={e => setDescription(e.target.value)}  />
                    <p>Ilość</p>
                    <input className="loginRegisterFormInput" type="number" name="quantity" id="quantity" onChange={e => setQuantity(e.target.value)} />
                    <p>Cena</p>
                    <input className="loginRegisterFormInput" type="number" name="price" id="price" onChange={e => setPrice(e.target.value)}  />
                    <p>Kategoria</p>
                    <select className="loginRegisterFormInput" value={category} onChange={e => setCategory(e.target.value)} >
                        <option value="2" >Laptop</option>
                        <option value="3" >Tablet</option>
                        <option value="4" >Telefon</option>
                    </select>
                    <p>Zdjęcie</p>
                    <input className="loginRegisterFormInput" type="file" name="file" id="file" accept="image/x-png,image/jpeg" onChange={handleFile} />
                    <input className="loginRegisterSubmit" type="submit" value="Dodaj produkt" />
                    <img src={url} alt="new"/>
                </form>
            </div>
        )
    
}


export default AdminSite;

