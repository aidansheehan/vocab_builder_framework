import axios, { AxiosRequestConfig }    from 'axios'
import jwtDecode, { JwtPayload }        from 'jwt-decode'
import { useNavigate }                  from 'react-router-dom'
import BASE_URL                         from './constants/base-url.constant'

/**
 * Function to redirect inauthenticated user to login
 * @returns null
 */
const redirectToLogin = (): null => {
    const navigate = useNavigate()
    navigate('/login')
    return null
}

/**
 * Function to send request to refresh user access token
 * @returns {any} result TODO type
 */
const refreshUser = async () => {

    const config = {
        withCredentials: true
    }

    const result = await axios.get(`${BASE_URL}auth/refresh`, config)

    return result
}

/**
 * Function to check if access token is expired
 * @param t_ current accessToken
 * @returns {boolean} whether accessToken is expired
 */
const isAccessTokenExpired = (t_: string) => {

    //Get the decoded JWT
    const decoded: JwtPayload = jwtDecode(t_)

    //Destructure decoded JWT for expiry date
    const { exp } = decoded

    //Get current time (in UTC)
    const currentTime = Math.floor(Date.now() / 1000)

    //Check if current time is greater than the expiration time and return
    return currentTime > exp
}

/**
 * HttpClient for requests requiring authentication
 * @author Aidan Sheehan
 * @version 0.1.0
 */
const PrivateHttpClient = axios.create({
    baseURL: BASE_URL
})

PrivateHttpClient.interceptors.request.use(
    async (config: AxiosRequestConfig) => {

        config.withCredentials          = true                  //Send cookie credentials with request
        config.headers['Content-Type']  = 'application/json'    //Configure content-type as json

        //Get the access token from local storage
        const accessToken = localStorage.getItem('userToken')

         //If no access token is found, return early and redirect user to login
        if (!accessToken) {
            return redirectToLogin()
        }

        //Check if the accessToken is expired
        else if (isAccessTokenExpired(accessToken)) {

            const response = await refreshUser()

            const { data } = response
            
            if (data.status === 'success') {
                
                const { data }          = response
                const newAccessToken    = data.accessToken

                await localStorage.setItem('userToken', newAccessToken)

                config.headers['Authorization'] = `Bearer ${newAccessToken}`
            }

            else {

                //Navigate to login
                return redirectToLogin()
            }
        }

        //accessToken is active
        else {

            config.headers['Authorization'] = `Bearer ${accessToken}`

        }

        return config
    }
)

export default PrivateHttpClient