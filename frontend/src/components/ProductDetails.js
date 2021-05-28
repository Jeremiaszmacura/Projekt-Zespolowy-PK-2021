import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import exampleData from './exampleData';
import './ProductDetails.css'
import Cookies from 'js-cookie'

const ProductDetails = () => {
    const location = useLocation();
    const myid = location.state.params;
    const [test, setTest] = useState(7)
    const [dostepnaIlosc, setDostepnaIlosc] = useState(test-1)
    const [amount, setAmount] = useState(1);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const history = useHistory();
    async function handleCartClick(id, productAmount){
        await delay(1000)
        history.push('/user-profile/user-orders', {id: id, amount: productAmount})
        window.location.reload()
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
   
    useEffect(() => {
        if(!Cookies.get('ids')){
            var tm = [];
            tm.push(myid)
            var json = JSON.stringify(tm)
            Cookies.set('ids', json)
        }
    }, [myid])

    return (
        <div className="detailsComponent">
            {exampleData.products.map((e) => {
                return myid === e.id ? 
                <div>
                <div className="product">
                    <img src ={e.image} alt="productimg"/>
                    <div className="productName">
                        <div className="fullName">{e.marka} {e.nazwa}</div>
                        <div className="productDetails">
                            <div className="if">Info1: ZZZZZ</div>
                            <div className="if">Info2: YYYY</div>
                            <div className="if">info3: ZZZZZ</div>
                            <div className="if">Info4: YYYY</div>
                            <div className="if">Info5: ZZZZZ</div>
                        </div>
                    </div>
                    <div className="priceDetails">
                        <div className="cena">{e.cena}zł</div>
                        <div className="dostepnosc">Dostępnych sztuk: {test}</div>
                        <div className="amount">
                            <div>Wybierz ilosc: {amount}</div>
                            <button className="bt" onClick={() => handleAdd()}>+</button>
                            <button className="bt" onClick={() => handleSub()}>-</button>
                        </div>
                        <div className="addToCard" onClick={() => handleCartClick(myid, amount)}>Dodaj do koszyka</div>
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