import axios from "axios"

/**
 * @author Aidan Sheehan
 * @version 0.1.0
 * TODO document properly with correct json formatting
 * Authentication service 
 * uses Axios for HTTP requests and local storage for user info & JWT
 * It provides the following important functions:
 * register(): POST {username, email, password}
 * login(): POST {username, password} & save JWT to local storage
 * logout(): remove JWT from local storage
 */

const API_URL = "https://localhost:3000/api/auth";

/** Function to register a new user */
const register = (username: string, email: string, password: string) => {

    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

/** Function to log user in */
const login = (username: string, password: string) => {

    return axios.post(API_URL + "signin", {
        username,
        password
    })
    .then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data
    })
}

const logout = () => {
    localStorage.removeItem("user");
};

//TODO this might be neater as 'export const' on each function decleration
export default {
    register,
    login,
    logout
};