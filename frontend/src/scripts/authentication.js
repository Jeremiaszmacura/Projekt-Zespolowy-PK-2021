
const authenticationHeader = () => {
    const token = JSON.parse(localStorage.getItem('user'));

    if (token) {
        return 'Bearer ' + token;
    } else {
        return {};
    }
}

const logout = () => {
    localStorage.removeItem("user");
    console.log("logged out");
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
  authenticationHeader,
  logout,
    getCurrentUser
};