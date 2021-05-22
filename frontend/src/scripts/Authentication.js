
const authenticationHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}

const logout = () => {
    localStorage.removeItem("user");
    console.log("logged out");
}

export default {
  authenticationHeader,
  logout
};