import axios, { AxiosRequestConfig }    from 'axios'
import BASE_URL                         from './constants/base-url.constant'

/**
 * Public HttpClient
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const PublicHttpClient = axios.create({
    baseURL: BASE_URL
})

PublicHttpClient.interceptors.request.use(

    (config: AxiosRequestConfig) => {

        config.headers['Content-Type']  = 'application/json'    //Configure header's content-type as json
        config.withCredentials          = true                  //Allow credentials for browser + server to send cookies to each other
        
        return config
    }
)

export default PublicHttpClient