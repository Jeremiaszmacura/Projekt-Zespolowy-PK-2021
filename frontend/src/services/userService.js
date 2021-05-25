import authentication from "../scripts/authentication";

const changeUserDetails = (userDetails) => {

    const CHANGE_DETAILS_URL = "http://localhost:4000/users/details/";

    const options = {
        method: 'PUT',
        headers:  {
            'Authorization': authentication.authenticationHeader(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
    }

    return fetch(CHANGE_DETAILS_URL, options)
        .then(response => {
            return response;
        });

}

const changeUserPassword = (newPassword) => {

    const CHANGE_PASSWORD_URL = "http://localhost:4000/users/changePassword/";

    const options = {
        method: 'PUT',
        headers:  {
            'Authorization': authentication.authenticationHeader(),
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPassword)
    }

    return fetch(CHANGE_PASSWORD_URL, options)
        .then(response => {
            return response;
        });

}

export default {
    changeUserDetails,
    changeUserPassword
}