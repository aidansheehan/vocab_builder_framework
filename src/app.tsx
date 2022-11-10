//Core
import { useCallback, useEffect, useState }     from "react"
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation } from "react-router-dom"
//Actions
import { logout }       from './actions/auth'
import { clearMessage } from './actions/message'

import { Link } from "react-router-dom"
import LandingPage from "./pages/landing/landing.page"
import LoginPage from "./pages/login/login.page"

import ProfilePage from './pages/profile-page'
import BoardUser from './pages/BoardUser'
import BoardModerator from './pages/BoardModerator'

/**
 * Main App Component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.0.1
 * @component
 * @returns (
 *  <App /> 
 * )
 */
const App = () => {

    const [ showModeratorBoard, setShowModeratorBoard ] = useState<boolean>(false)  //Whether to show moderator (user type) protected content

    //Get current user
    //@ts-ignore TODO
    const { user: currentUser } = useSelector((state) => state.auth)

    const dispatch  = useDispatch()
    let location    = useLocation()

    useEffect(() => {
        if (["/login", "/register"].includes(location.pathname)) {
            dispatch(clearMessage())    //Clear message when changing location
        }
    }, [dispatch, location])

    const logOut = useCallback(() => {

        //@ts-ignore
        dispatch(logout())

    }, [ dispatch ])

    useEffect(() => {

        if (currentUser) {
            setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"))
        } else {
            setShowModeratorBoard(false)
        }
    }, [ currentUser ])

    return (

        <div>
            <ul>
                <li>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>
                
                {showModeratorBoard && (
                    <li>
                        <Link to={"/mod"}>
                            Moderator Board
                        </Link>
                    </li>
                )}

                {currentUser ? (
                    <>
                        <li>
                            <Link to={"/profile"}>
                                {currentUser.username}
                            </Link>
                        </li>
                        <li>
                            <a href="/login" onClick={logOut}>
                                Log Out
                            </a>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to={"/login"}>
                                Login
                            </Link>
                        </li>

                        {/* <li>
                            <Link to={"/register"}>
                                Sign Up
                            </Link>
                        </li> */}
                    </>
                )}
            </ul>

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/user" element={<BoardUser />} />
                <Route path="/mod" element={<BoardModerator />} />
            </Routes>

        </div>
    )
}

export default App