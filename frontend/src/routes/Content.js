import React from 'react';
import Sidebar from '../components/Sidebar';
import Product from  '../components/Product';
import './Content.css';

const Content = (props) => {
    const kategoria = props.category;
    // Koncepcja by Konrad - do dyskusji i krytki :)
    // Content - używany w: patrz -> App.js
    // Tu mogłyby być obok siebie komponenty:
    // narzedzie filtrowania || lista itemow
    // Parametr category może przyjmować: all, laptops, phones, tablets
    // Na podstawie category - narzedzie filtrowania ustawia sie na np. latptopy,
    // Zmiana w filtrze rzecz jasna powoduje, że komponent ItemList wyswietla to co nakazuje filtr.
    return (
        <div className="main">
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="content">
                <Product category = {kategoria}/>
            </div>
        </div>
    );
};

export default Content;