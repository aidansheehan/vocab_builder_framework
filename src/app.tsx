//Router
import { useRoutes } from 'react-router-dom'
//Routes
import ProtectedRoute           from './routing/protected.route/protected.route'
import UnprotectedRoute         from './routing/unprotected.route/unprotected.route'
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

    const routes = useRoutes([
        {
            path: '/',
            element: <UnprotectedRoute />,
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
            element: <ProtectedRoute />,
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