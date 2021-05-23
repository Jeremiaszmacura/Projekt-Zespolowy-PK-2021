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

    console.log(options);
    console.log(userDetails);

    return fetch(CHANGE_DETAILS_URL, options)
        .then(response => {
            return response;
        });

}

export default {
    changeUserDetails
}