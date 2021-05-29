import exampleData from './exampleData';
import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import "./Product.css";
import useFetch from "../services/useFetch";

const Product = (props) => {
    const productsURL = "https://http://localhost:4000/";

    const history = useHistory();
    let fetchFun = useFetch(productsURL,{});
    const [productsData, setProductsData] = useState();
    function handleClick(id){
        history.push('/product-details', {params: id})
    }
    
    setProductsData(fetchFun[0]);
    

    return (  
        <div className="productContent">
            {productsData?
            productsData
                .filter(p =>
                    p.price <= props.cena.max
                    && p.price >= props.cena.min
                )
                .filter(p =>
                    !props.query && true || (p.category + ' ' + p.mark + ' ' + p.name).toLowerCase().includes(props.query.toLowerCase())
                )
                .map((e) =>
            {   
                return props.category === e.produkt || props.category === 'all'  ?
                <a className="button" onClick={() => handleClick(e.id)}>
                    <div className="productCard" key={e.id}>
                        <div className="img">
                            <img className="medium" src ="/images/MaCentre.png" alt="productimg"/>
                        </div>
                        <div className="info">
                            <div className="marka">{e.category} {e.mark}</div>
                            <div className="nazwa">{e.name}</div>
                            <div className="price">Cena: {e.price}zł</div>
                        </div>
                    </div>
                </a>
                : 
                null;
                }
            ):<div>NIE MA I NIE BEDZIE</div>}
        </div>
    );
}
 
export default Product;