import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import exampleData from './exampleData';
import './ProductDetails.css'
import useFetch from "../services/useFetch";

const ProductDetails = () => {
    const location = useLocation();
    const myid = location.state.params;
    const ilosc = 5;
    const [amount, setAmount] = useState(1);
    const [singleProduct, setSingleProduct] = useState([]);
    const productsURL = `https://http://localhost:4000/${myid}`;

    let fetchFun = useFetch(productsURL,{});

    setSingleProduct(fetchFun[0]);

    function handleClick(prop){
        if(amount >= 0 && amount < ilosc){
        if(prop === 1) setAmount(amount+1)
        if(prop === 2) setAmount(amount-1)
        }
    }
    
    return (
        <div className="detailsComponent">
            {singleProduct.map((e) => {
                return myid === e.id ? 
                <div>
                <div className="product">
                    <img src ="/images/MaCentre.png" alt="productimg"/>
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
                        <div className="cena">{e.price}zł</div>
                        <div className="dostepnosc">Dostępnych sztuk: {ilosc}</div>
                        <div className="amount">
                            <div>Wybierz ilosc: {amount}</div>
                            <button className="bt" onClick={() => handleClick(1)}>+</button>
                            <button className="bt" onClick={() => handleClick(2)}>-</button>
                        </div>
                        <div className="addToCard">Dodaj do koszyka</div>
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