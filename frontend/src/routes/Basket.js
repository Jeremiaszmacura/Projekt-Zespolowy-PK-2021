import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import exampleData from '../components/exampleData';
import useFetch from "../services/useFetch";
import authentication from "../scripts/authentication";
import './Basket.css'

const Basket = () => {
    const [priceForAll, setPriceForAll] = useState(0)
    const [checkState, setCheckState] = useState(false)
    const [selected, setSelected] = useState("")
    const history = useHistory()
    let adresPaczkomatu;

    const GET_ITEMS_URL = 'http://localhost:4000/products/';

    const {data: products, isLoading, error, reFetch} = useFetch(GET_ITEMS_URL, {});

    function HandleOrderClick(){
        let arr = JSON.parse(Cookies.get('ids'))
        let orderArr = []
        for(let i = 0; i < arr.productId.length; i++){
            let f1 = arr.productId[i]
            let f2 = arr.quantity[i]
            let testArr = 
                {
                    productId: f1,
                    quantity: f2
                }
            orderArr.push(testArr)
        }
        console.log(orderArr)

        fetch("http://localhost:4000/orders/", {
            method: "POST",
            headers: {
                'Authorization': authentication.authenticationHeader(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                price: priceForAll,
                products: orderArr
            })
        }).then((response) => response.json()
            .catch(err => {
                console.log(err)
                return {};
            })).then((json) => {
                console.log(json)
            }).catch((err) => {
                console.log('posting order failed', err)
            })
    }

    // const changeSelectOptionHandler = (event) => {
    //     setSelected(event.target.value)
    // }

    // if(selected === 'Paczkomat'){
    //     adresPaczkomatu = <div className="paczkomat">
    //         <input placeholder="Wprowadź adres paczkomatu..."></input>
    //     </div>
    // }

    function array_move(arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr;
    }

    function HandleDelete(id){
        let arr = JSON.parse(Cookies.get('ids'))
        for(let i = 0; i < arr.productId.length; i++){
            if(arr.productId[i] === id){
                array_move(arr.productId, i, arr.productId.length-1)
                array_move(arr.quantity, i, arr.quantity.length-1)
                arr.productId.pop()
                arr.quantity.pop()
                if(arr.productId.length === 0){
                    Cookies.remove('ids')
                }else{
                    let fixed = JSON.stringify(arr)
                    console.log(fixed)
                    Cookies.set('ids', fixed)
                }
            }
        }
        window.location.reload()
    }

    useEffect(() => {
        if(Cookies.get('ids')){
        let arr = JSON.parse(Cookies.get('ids'))
        let cena = 0
        if(products){
            for(let i = 0; i < products.length; i++){
                for(let j = 0; j < products.length; j++){
                    if((arr.productId[i]) === (products[j].id)){
                        cena += Number(arr.quantity[i]) * products[j].price
                        setPriceForAll(cena)
                    }
                }
            }
        }}
    }, [products])

    let stanKoszyka
    if(Cookies.get('ids')){
        let arr = JSON.parse(Cookies.get('ids'))
        stanKoszyka = <div className="cartComponent">
        <div className="payment">
        {products && (arr.productId).map((z, i) => products.filter((p) => p.id === z).map((e) => {
            return e.id === z ? 
            <div className="fullProductInfo">
                <img src = {e.src}/>
                <div className="nameProduct">{e.mark} {e.name}</div>
                <div className="productAmount">Ilość: {arr.quantity[i]} </div>
                <div className="cenaProduct">Cena: 
                <div className="cn">{e.price*arr.quantity[i]}</div>zł</div>
                <button className="deleteButton" onClick={() => HandleDelete(e.id)}>Usuń</button>
            </div>
            :
            null
        }))}
        </div>
        <div className="cart">
            <div className="priceForAll">Do zapłaty:</div>
            <br></br>
            <h3>{priceForAll} zł</h3>
            {/* <div className="inp">
            <div>Wysyłka do:</div>
        <select onChange={changeSelectOptionHandler}>
            <option>Wybierz..</option>
            <option>Mój adres</option>
            <option>Paczkomat</option>
        </select>
        </div> */}
        {adresPaczkomatu}
            <button className="order" onClick={HandleOrderClick}>Złóż zamówienie</button>
        </div>
        
        </div>
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
