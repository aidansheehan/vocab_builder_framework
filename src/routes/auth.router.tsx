//React router
import { createMemoryRouter } from "react-router-dom"
//Layouts
import AuthLayout from "../layouts/auth.layout"
//Pages
import ErrorPage                from "../pages/error/error.page"
import LandingPage              from "../pages/landing/landing.page"
import CollectionEditorPage     from "../pages/collection-editor/collection.editor.page"
import GamePage                 from "../pages/game/game.page"
import CreateCollectionPage     from "../pages/create-collection/create-collection.page"

/**
 * Auth router
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @function
 * @returns {Router}
 */
 const authRouter = (login: () => void) => (createMemoryRouter([
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
                element: <CreateCollectionPage />
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
]))

export default authRouter