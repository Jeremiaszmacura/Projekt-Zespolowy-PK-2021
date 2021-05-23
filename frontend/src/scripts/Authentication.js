
const authenticationHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { Authorization: user.accessToken };
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