import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Product from  '../components/Product';
import './Content.css';

const Content = (props) => {
    // Koncepcja by Konrad - do dyskusji i krytki :)
    // Content - używany w: patrz -> App.js
    // Tu mogłyby być obok siebie komponenty:
    // narzedzie filtrowania || lista itemow
    // Parametr category może przyjmować: all, laptops, phones, tablets
    // Na podstawie category - narzedzie filtrowania ustawia sie na np. latptopy,
    // Zmiana w filtrze rzecz jasna powoduje, że komponent ItemList wyswietla to co nakazuje filtr.
    const [value, setVal] = useState({
        max: 10000,
        min: 1
    })

    const [id, setID] = useState(0)
    return (
        <div>
        <div className="main">
            <div className="sidebar">
                <Sidebar passValue={val => setVal({max: val.max, min: val.min})}/>
            </div>    
            <div className="content">
                <Product category = {props.category} cena = {value} passedId={pId => setID(pId)}/>
            </div>
        </div>
        </div>
    );
};

export default Content;