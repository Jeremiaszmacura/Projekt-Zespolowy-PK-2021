import exampleData from './exampleData';
import React, { useState } from 'react';
import "./Product.css";

const Product = (props) => {
    function handleClick(id){
        props.passedId(id) 
    }

    return (  
        <div className="productContent">
            {exampleData.products.filter(p => p.cena <= props.cena.max && p.cena >= props.cena.min).map((e) => 
            {   
                return props.category === e.produkt || props.category === 'all'  ?
                <a className="button" onClick={() => handleClick(e.id)}>
                    <div className="productCard" key={e.id}>
                        <div className="img">
                            <img className="medium" src ={e.image} alt="productimg"/>
                        </div>
                        <div className="info">
                            <div className="marka">{e.produkt} {e.marka}</div>
                            <div className="nazwa">{e.nazwa}</div>
                            <div className="price">Cena: {e.cena}zł</div>
                        </div>
                    </div>
                </a>
                : 
                null;
                }
            )}
        </div>
    );
}
 
export default Product;