import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import exampleData from '../components/exampleData';
import './Basket.css'

const Basket = () => {
    const [priceForAll, setPriceForAll] = useState(0)
    const [checkState, setCheckState] = useState(false)
    const [selected, setSelected] = useState("")
    const history = useHistory()
    let adresPaczkomatu;

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value)
    }

    if(selected === 'Paczkomat'){
        adresPaczkomatu = <div className="paczkomat">
            <input placeholder="Wprowadź adres paczkomatu..."></input>
        </div>
    }

    let stanKoszyka

    if(Cookies.get('ids')){
        let arr = JSON.parse(Cookies.get('ids'))
        stanKoszyka = <div className="cartComponent">
        <div className="payment">
        {(arr.prodID).map((z, i) => exampleData.products.filter((p) => p.id === z).map((e) => {
            return e.id === z ? 
            <div className="fullProductInfo">
                <img src = {e.image}/>
                <div className="nameProduct">{e.marka} {e.nazwa}</div>
                <div className="productAmount">Ilość: {arr.prodAm[i]} </div>
                <div className="cenaProduct">Cena: 
                <div className="cn">{e.cena*arr.prodAm[i]}</div>zł</div>
            </div>
            :
            null
        }))}
        </div>
        <div className="cart">
            <div className="priceForAll">Do zapłaty:</div>
            <br></br>
            <h3>{priceForAll} zł</h3>
            <div className="inp">
            <div>Wysyłka do:</div>
        <select onChange={changeSelectOptionHandler}>
            <option>Wybierz..</option>
            <option>Mój adres</option>
            <option>Paczkomat</option>
        </select>
        </div>
        {adresPaczkomatu}
            <button className="order" onClick={() => {Cookies.remove('ids')}}>Złóż zamówienie</button>
        </div>
        
        </div>

        // let tmp = JSON.parse(Cookies.get('ids'))
        // let price = document.getElementsByClassName('cn')            
        // let val = 0;
        // for(let i = 0; i < tmp.prodID.length; i++){
        //     val += Number(price[i].innerHTML)
        // }
        // setPriceForAll(val)
    }

    if(!Cookies.get('ids')){
        stanKoszyka = <div className="pustyKoszyk">Twój koszyk jest pusty.
            <br></br><button onClick={() => history.push('/')}>Chcę coś kupić!</button>
        </div>
    }
    
    return (
        <div>{stanKoszyka}</div>
    );

};

export default Basket;
