import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Product from  '../components/Product';
import './Content.css';

const Content = (props) => {
    const [value, setVal] = useState({
        max: 10000,
        min: 1
    })
    return (
        <div>
        <div className="main">
            <div className="sidebar">
                <Sidebar passValue={val => setVal({max: val.max, min: val.min})}/>
            </div>    
            <div className="content">
                <Product category = {props.category} cena = {value}/>
            </div>
        </div>
        </div>
    );
};

export default Content;