import exampleData from './exampleData';
import React from 'react';
import "./Product.css";

const Product = (props) => {
    return (  
        <div className="productContent">
            {exampleData.products.map((e) => 
                {
                    return props.category === e.produkt || props.category === 'all' ? 
                    <div className="productCard">
                    <img className="medium" src ={e.image} alt="productimg"/>
                    <div className="info">
                        <div className="marka">{e.produkt} {e.marka}</div>
                        <div className="nazwa">{e.nazwa}</div>
                        <div className="price">Cena: {e.cena}</div>
                    </div>
                    </div>
                    : 
                    null;
                }
            )}
        </div>
    );
}
 
export default Product;