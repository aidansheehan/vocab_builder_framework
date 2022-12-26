//Core
import { useEffect } from 'react'
//Router
import { useRoutes } from 'react-router-dom'
//Redux
import { getUserDetails } from './redux/features/user/user.actions'
import useAppDispatch from './hooks/redux/use-app-dispatch.hook'
//Routes
import PrivateRoute from './routes/private.route'
import PublicRoute  from './routes/public.route'
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

    const accessToken = localStorage.getItem('userToken')   //Get access token

    const dispatch = useAppDispatch()  //Init useAppDispatch

    //Automatically authenticate user if token is found
    useEffect(() => {
        if (accessToken) {
            dispatch(getUserDetails(accessToken))
        }
    }, [ accessToken, dispatch ] )

    const routes = useRoutes([
        {
            path: '/',
            element: <PublicRoute />,
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
            ],
        },
        {
            path: '/collections',
            element: <PrivateRoute />,
            errorElement: <ErrorPage />,
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
    ])

    return routes
}

export default App