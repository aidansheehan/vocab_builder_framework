/**
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * TODO document properly
 * Methods for retrieving data from the server
 */
const authHeader = () => {

    //Get user
    const user = JSON.parse(localStorage.getItem('user'));

    //Return HTTP authorization header if logged  in user with accessToken in local storage
    if (user && user.accessToken) {

        //TODO x-access-token specific to node implementation may need changing
        return { 'x-access-token': user.accessToken };
    } else {
        return {};
    }
}

export default authHeader;