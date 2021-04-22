import React from 'react';

const  Content = ({category}) => {

    // Koncepcja by Konrad - do dyskusji i krytki :)
    // Content - używany w: patrz -> App.js
    // Tu mogłyby być obok siebie komponenty:
    // narzedzie filtrowania || lista itemow
    // Parametr category może przyjmować: all, laptops, phones, tablets
    // Na podstawie category - narzedzie filtrowania ustawia sie na np. latptopy,
    // Zmiana w filtrze rzecz jasna powoduje, że komponent ItemList wyswietla to co nakazuje filtr.

    return (
        <div className="content"></div>
    );
};

export default Content;