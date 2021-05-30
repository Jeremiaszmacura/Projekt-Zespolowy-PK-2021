import React, {useEffect, useState} from 'react';
import './UserOrders.css'
import UserProfileSideBar from "../components/UserProfileSideBar";
import useFetch from "../services/useFetch";
import authentication from "../scripts/authentication";


const UserOrders = () => {

    const GET_ORDERS_URL = "http://localhost:4000/orders/";
    const options = {
        method: 'GET',
        headers:  {
            'Authorization': authentication.authenticationHeader(),
            'Content-Type': 'application/json'
        },
    }

    const {data: orders, isLoading, error, refetch} = useFetch(GET_ORDERS_URL, options);

    const dateAsString = (date) => {
        let dateToConvert  = new Date(Date.parse(date));
        return dateToConvert.toLocaleString();
    }

    return (
        <div className="main">
            <div className="sidebar">
                <UserProfileSideBar/>
            </div>
            { orders && (
                <div className="user-orders">
                    <table className="orders-table">
                        <tbody>
                        <tr>
                            <th>PRODUKTY</th>
                            <th>DATA ZAMÓWIENIA</th>
                            <th>STATUS</th>
                            <th>KOSZT</th>
                        </tr>
                        {
                            orders.map((order, key) => {
                                const {created_at, order_status, price, products} = order;
                                const productsNames = products.map(product => {
                                    return product.mark + ' ' + product.name;
                                })
                                return (
                                    <tr key={key}>
                                        <td>
                                            <ul>
                                                {productsNames.map((name, key) => {
                                                    return(
                                                        <li key={key} className="row">
                                                            {name}
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </td>
                                        <td>{dateAsString(created_at)}</td>
                                        <td>{order_status}</td>
                                        <td>{price} zł</td>
                                    </tr>
                                );
                            })
                        }
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );

};

export default UserOrders;
