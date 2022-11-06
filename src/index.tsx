//Core
import { createRoot }   from 'react-dom/client'
import { useState }     from "react"
//Router
import { createMemoryRouter, RouterProvider } from "react-router-dom"
//Pages
import HomePage                 from './pages/home/home.page'
import ErrorPage                from './pages/error/error.page'
import CollectionEditorPage     from './pages/collection-editor/collection.editor.page'
import CollectionDetailsPage    from './pages/collection-details/collection-details.page'
import GamePage                 from './pages/game/game.page'
import LandingPage              from './pages/landing/landing.page'
import NewCollectionPage        from './pages/new-collection/new-collection.page'
//Layouts?
import AuthLayout from './layouts/auth.layout'
import MainLayout from './layouts/main.layout'
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
    const mainRouter = createMemoryRouter([
        {
            path: "/",
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: "collections",
                    children: [
                        {
                            path: "new",//Todo this should maybe be CreateCollectionPage no translations just title langs etc
                            element: <NewCollectionPage />
                        },
                        {
                            path: "view/:collectionId",
                            element: <CollectionDetailsPage />
                        },
                        {
                            path: "edit/:collectionId",//Todo how to pass this value through to collection editor
                            element: <CollectionEditorPage />
                        }
                    ]
                },
                {
                    path: "play/:collectionId",
                    element: <GamePage />
                }
                
            ]
        }
    ])

    //Unauthenticated routes
    const authRouter = createMemoryRouter([
        {
            path: "/",
            element: <AuthLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <LandingPage login={login} />
                },
                {
                    path: "new",
                    element: <NewCollectionPage />
                },
                {
                    path: "edit",
                    element: <CollectionEditorPage />
                },
                {
                    path: "play",
                    element: <GamePage />
                }
            ]
        },
    ])

    return <RouterProvider router={ isAuth ? mainRouter : authRouter } />

}

const root = createRoot(document.getElementById("root")!)
root.render(<App />);