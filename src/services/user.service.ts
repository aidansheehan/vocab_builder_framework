import axios        from "axios";
import authHeader   from "./auth-header";

/**
 * Service for accessing data
 */

/**
 * TODO:
 *  - need getUserContent, getStudentContent, getTeacherContent
 */

const API_URL = "http://localhost:3000/api/test";

//GET public content from server TODO this may not be needed
const getPublicContent = () => {
    return axios.get(API_URL + "all");
};

//Get user protected content from server note need to send HTTP header with authHeader
const getUserBoard = () => {
    return axios.get(API_URL + "user", { headers: authHeader() });
};

//GET moderator protected content from server TODO won't be needed 
const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", { headers: authHeader() });
}

//GET admin protected content from server TODO won't be needed
const getAdminBoard = () => {
    return axios.get(API_URL + "admin", { headers: authHeader() });
}

//TODO this might be neater as export const on functions above
export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard
};
