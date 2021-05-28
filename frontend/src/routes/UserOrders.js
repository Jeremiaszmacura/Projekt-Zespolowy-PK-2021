import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import exampleData from '../components/exampleData';
import './UserOrders.css'

const UserOrders = () => {
    const location = useLocation();
    const productID = location.state.id;
    const productAmount = location.state.amount;
    const [priceForAll, setPriceForAll] = useState(0)
    var tmp;
    useEffect(() => {
        console.log(JSON.parse(Cookies.get('ids')))
        if(Cookies.get('ids')){
            var tmp = JSON.parse(Cookies.get('ids'))
            console.log(tmp)
            var lastItem = tmp[tmp.length - 1]
            if(lastItem !== productID){
                tmp.push(productID)
                var json = JSON.stringify(tmp)
                Cookies.set('ids', json)
            }
        }
    })

    return (
        <div className="cartComponent">
            <div className="payment">
            {(JSON.parse(Cookies.get('ids'))).map(x => exampleData.products.filter((p) => p.id === x).map((e) => {
                return e.id === x ? 
                <div className="fullProductInfo">
                    <img src = {e.image}/>
                    <div className="nameProduct">{e.marka} {e.nazwa}</div>
                    <div className="productAmount">Amount to order: {productAmount} </div>
                    <div className="cenaProduct">Price: {e.cena*productAmount}zł</div>
                </div>
                :
                null
            }))}
            </div>
            <div className="cart">
                <div className="priceForAll">Price for all items:</div>
                <br></br>
                <h3>{priceForAll}</h3>
                <button className="order" onClick={() => {Cookies.remove('ids')}}>Make an order</button>
            </div>
        </div>
    );
};

export default UserOrders;
