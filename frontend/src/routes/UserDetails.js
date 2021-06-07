import React, {useEffect, useState} from 'react';
import UserProfileSideBar from "../components/UserProfileSideBar";
import './UserDetails.css';
import authentication from "../scripts/authentication"
import useFetch from "../services/useFetch";
import userService from "../services/userService";

const UserDetails = () => {

    const GET_DETAILS_URL = "http://localhost:4000/users/details/";

    const {data: userDetails, isLoading, error, reFetch} = useFetch(GET_DETAILS_URL, {
        method: 'GET',
        headers: {'Authorization': authentication.authenticationHeader()}
    });

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [code, setCode] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if(userDetails){
            setFirstName(userDetails.first_name);
            setLastName(userDetails.last_name);
            setCountry(userDetails.country);
            setCity(userDetails.city);
            setCode(userDetails.code);
            setStreet(userDetails.street);
            setHouseNumber(userDetails.house_number);
            setApartmentNumber(userDetails.apartment_number);
            setPhone(userDetails.phone);
        }
    }, [userDetails]);

    const saveChanges = (e) => {
        e.preventDefault();
        const newDetails = {
            first_name: firstName,
            last_name: lastName,
            country: country,
            city: city,
            code: code,
            street: street,
            house_number: houseNumber,
            apartment_number: apartmentNumber,
            phone: phone
        }

        userService.changeUserDetails(newDetails)
            .then(() => {
                reFetch();
                alert("Zmiany zostały zapisane!");
            })
    }

    return (

        <div className="main">
            <div className="sidebar">
                <UserProfileSideBar/>
            </div>
            <div className="user-details">
                <h1>Moje dane</h1>
                <form onSubmit={saveChanges}>
                    <div className="flex-container">
                        <label>First Name</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="flex-container">
                        <label>Last Name</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="flex-container">
                        <label>Country</label>
                        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)}/>
                    </div>
                    <div className="flex-container">
                        <label>City</label>
                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div className="flex-container">
                        <label>Code</label>
                        <input type="text" value={code} onChange={(e) => setCode(e.target.value)}/>
                    </div>
                    <div className="flex-container">
                        <label>Street</label>
                        <input type="text" value={street} onChange={(e) => setStreet(e.target.value)}/>
                    </div>
                    <div className="flex-container">
                        <label>House Number</label>
                        <input type="text" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)}/>
                    </div>
                    <div className="flex-container">
                        <label>Apartment Number</label>
                        <input type="text" value={apartmentNumber} onChange={(e) => setApartmentNumber(e.target.value)}/>
                    </div>
                    <div className="flex-container">
                        <label>Phone</label>
                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <button>Zapisz zmiany</button>
                </form>
            </div>
        </div>
    );
};

export default UserDetails;