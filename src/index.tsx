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
//Layouts?
import Root from './routes/root'
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

    //@ts-ignore
    const [ isAuth, setIsAuth ] = useState<boolean>(false)

    const mainRouter = createMemoryRouter([
        {
            path: "/",
            element: <Root />,
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
                            element: <CollectionEditorPage />
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

    //TODO create authRouter

    return <RouterProvider router={mainRouter} />

}

const root = createRoot(document.getElementById("root"))
root.render(<App />);