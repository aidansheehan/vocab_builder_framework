//Core
import { createRoot }   from 'react-dom/client'
import { useState }     from "react"
//React Router
import { RouterProvider } from "react-router-dom"
//Routers
import mainRouter from './routes/main.router'
import authRouter from './routes/auth.router'
//Stylesheets
import './global.scss'

/**
 * Root entry point of the application
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
const App = () => {

    //Whether user authenticated
    const [ isAuth, setIsAuth ] = useState<boolean>(false)

    //Function to authenticate user
    const login = () => {
        setIsAuth(true)
    }

    //Authenticated routes
    const MAIN_ROUTER = mainRouter()

    //Unauthenticated routes
    const AUTH_ROUTER = authRouter(login)

    return <RouterProvider router={ isAuth ? MAIN_ROUTER : AUTH_ROUTER } />

}

const root = createRoot(document.getElementById("root")!)
root.render(<App />);