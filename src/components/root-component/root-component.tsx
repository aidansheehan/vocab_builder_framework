import { useRoutes }            from 'react-router-dom'
import PreloaderComponent       from '../preloader/preloader.component'
import CollectionDetailsPage    from '../../pages/collection-details/collection-details.page'
import CollectionEditorPage     from '../../pages/collection-editor/collection-editor.page'
import CreateCollectionPage     from '../../pages/create-collection/create-collection.page'
import ErrorPage                from '../../pages/error/error.page'
import HomePage                 from '../../pages/home/home.page'
import LandingPage              from '../../pages/landing/landing.page'
import LoginPage                from '../../pages/login/login.page'
import RegisterPage             from '../../pages/register/register.page'

/**
  * Route container element for application to render
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const RootComponent = (): JSX.Element => {

    //Define app routes
    const routes = useRoutes([
    
        {
            path: '/',
            element: <PreloaderComponent />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <LandingPage />
                },
                {
                    path: 'login',
                    element: <LoginPage />
                },
                {
                    path: 'register',
                    element: <RegisterPage />
                },
                {
                    path: 'collections',
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
                            children: [
                                {
                                    index: true,
                                    element: <CollectionDetailsPage />
                                },
                                {
                                    path: 'edit',
                                    element: <CollectionEditorPage />
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ])

    // return routes
    return routes
}

export default RootComponent