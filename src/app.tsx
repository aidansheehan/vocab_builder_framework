//Core
import { useEffect } from 'react'
//Router
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
//Redux
import useAppSelector from './hooks/redux/use-app-selector.hook'
//Layout
import AppLayout from './layouts/app.layout'
//Pages
import HomePage                 from './pages/home/home.page'
import LandingPage              from './pages/landing/landing.page'
import LoginPage                from './pages/login/login.page'
import RegisterPage             from './pages/register/register.page'
import ErrorPage                from './pages/error/error.page'
import CollectionDetailsPage    from './pages/collection-details/collection-details.page'
import CollectionEditorPage     from './pages/collection-editor/collection-editor.page'
import CreateCollectionPage     from './pages/create-collection/create-collection.page'
//Stylesheets TODO would be better if global module
import './global.scss'

/**
 * Main app component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @component
 * @example
 * return (
 *  <App />
 * )
*/
const App = () => {

    const { userInfo } = useAppSelector(state => state.user)    //Get userInfo

    const location = useLocation()  //Init useLocation
    const navigate = useNavigate()  //Init useNavigate

    /** Route Guard Redirect Logic */
    useEffect(() => {

        //If user is logged in
        if (!!userInfo) {

            //If user is trying to access public route
            if (!location.pathname.includes('collections')) {

                //Redirect to user home page
                navigate('/collections')
            }
        }

        //If user is not logged in
        if (!userInfo) {

            //If user is trying to access private route
            if (location.pathname.includes('collections')) {

                //Redirect to login page
                navigate('/login')
            }
        }

    }, [ userInfo, navigate ] )

    const routes = useRoutes([
        {
            path: '/',
            element: <AppLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
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
                    path: '/collections',
                    children: [
                        {
                            index: true,
                            element: <HomePage />
                        },
                        {
                            path: 'new',
                            element: <CreateCollectionPage />
                        },
                        {
                            path: ':collectionId',
                            element: <CollectionDetailsPage />
                        },
                        {
                            path: ':collectionId/edit',
                            element: <CollectionEditorPage />
                        }
                    ]
                }
            ],
        },
    ])

    return routes
}

export default App