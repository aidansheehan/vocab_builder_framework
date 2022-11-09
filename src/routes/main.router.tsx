//React router
import { createMemoryRouter } from "react-router-dom"
//Layouts
import MainLayout from "../layouts/main.layout"
//Pages
import HomePage                 from "../pages/home/home.page"
import ErrorPage                from "../pages/error/error.page"
import CollectionEditorPage     from "../pages/collection-editor/collection.editor.page"
import CollectionDetailsPage    from "../pages/collection-details/collection-details.page"
import GamePage                 from "../pages/game/game.page"
import CreateCollectionPage     from "../pages/create-collection/create-collection.page"

/**
 * Main router
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @function
 * @returns {Router}
 */
 const mainRouter = () => createMemoryRouter([
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
                        path: "new",
                        element: <CreateCollectionPage />
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

export default mainRouter