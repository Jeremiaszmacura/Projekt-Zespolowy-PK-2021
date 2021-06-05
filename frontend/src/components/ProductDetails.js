import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import exampleData from './exampleData';
import './ProductDetails.css'
import Cookies from 'js-cookie'
import useFetch from "../services/useFetch";

const ProductDetails = ({loggedUser}) => {
    const location = useLocation();
    const myid = location.state.params;
    const [test, setTest] = useState(0)
    const [dostepnaIlosc, setDostepnaIlosc] = useState(test-1)
    const [amount, setAmount] = useState(1);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const GET_ITEMS_URL = 'http://localhost:4000/products/';

    const {data: products, isLoading, error, reFetch} = useFetch(GET_ITEMS_URL, {});

    const history = useHistory();
    async function handleCartClick(id, productAmount){
        if(!Cookies.get('ids')){
            var tm = {
                productId: [],
                quantity: [],
            };
            tm.productId.push(id)
            tm.quantity.push(productAmount)
            var json = JSON.stringify(tm)
            Cookies.set('ids', json)
            console.log('no cookies ran')
        }

        if(Cookies.get('ids')){
            let tmp = JSON.parse(Cookies.get('ids'))
            let productsidentifyer = tmp.productId
            if(productsidentifyer.includes(id) === false){
                tmp.productId.push(id)
                tmp.quantity.push(productAmount)
                let json = JSON.stringify(tmp)
                Cookies.set('ids', json)
            }
        }

        await delay(500)
        history.push('/cart')
    }

    function handleAdd(){
        if(dostepnaIlosc !== 0){
            setAmount(amount+1)
            setDostepnaIlosc(dostepnaIlosc-1)
        }
    }

    function handleSub(){
        if(amount !== 1){
            setAmount(amount-1)
            setDostepnaIlosc(dostepnaIlosc+1)
        }
    }

    useEffect(async () => {
        if(products){
            for(let i = 0; i < products.length; i++){
                if(myid === products[i].id){
                    setDostepnaIlosc(products[i].quantity-1)
                    setTest(products[i].quantity)
                    await delay (500)
                }
            } 
        }
    }, [products])

    return (
        <div className="detailsComponent">
            {products && products.map((e) => {
                return myid === e.id ? 
                <div>
                <div className="product">
                    <img src ={e.src} alt="productimg"/>
                    <div className="productName">
                        <div className="fullName">{e.mark} {e.name}</div>
                        <div className="productDetails">
                            <div className="if">Info1: ZZZZZ</div>
                            <div className="if">Info2: YYYY</div>
                            <div className="if">info3: ZZZZZ</div>
                            <div className="if">Info4: YYYY</div>
                            <div className="if">Info5: ZZZZZ</div>
                        </div>
                    </div>
                    <div className="priceDetails">
                        {
                            (test === 0) ? (
                              <div>
                                  <div className="cena">{e.price}zł</div>
                                  <div className="dostepnosc">Dostępnych sztuk: {test}</div>
                                  <div className="notAv"><h3>Produkt chwilowo niedostępny.</h3></div>
                              </div>
                            ) : (
                                <div>
                        <div className="cena">{e.price}zł</div>
                        <div className="dostepnosc">Dostępnych sztuk: {test}</div>
                        <div className="amount">
                            <div>Wybierz ilosc: {amount}</div>
                            <button className="bt" onClick={() => handleAdd()}>+</button>
                            <button className="bt" onClick={() => handleSub()}>-</button>
                        </div>
                        {
                            loggedUser && test > 0 && <div className="addToCard" onClick={() => handleCartClick(e.id, amount)}>Dodaj do koszyka</div>
                        }
                        </div>)}
                    </div>
                </div>
                
                </div>
                :
                null;
            })}
        </div>
    );
}
 
export default ProductDetails;