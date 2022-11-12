import { /*Route, Routes,*/ useRoutes } from "react-router-dom"
// import HeaderComponent from "./components/header/header.component"
import HomePage from "./pages/home/home.page"
import LandingPage from "./pages/landing/landing.page"
import LoginPage from "./pages/login/login.page"
//Stylesheets TODO would be better if global module
import './global.scss'
import RegisterPage from "./pages/register/register.page"

/**
 * Main app component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @component
 * @example
 * return (
 *  <App />
 * )
//  */
const App = () => {

    const routes = useRoutes([
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: '/login',
            element: <LoginPage />
        },
        {
            path: '/register',
            element: <RegisterPage />
        },
        {
            path: '/home',
            element: <HomePage />
        }
    ])

    return routes
}

export default App