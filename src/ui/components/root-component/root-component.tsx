import { useRoutes }            from 'react-router-dom'
import PreloaderComponent       from '../preloader/preloader.component'
import CollectionDetailsPageComponent    from '../pages/collection-details.page/collection-details.page.component'
import CollectionEditorPageComponent     from '../pages/collection-editor.page/collection-editor.page.component'
import CreateCollectionPageComponent     from '../pages/create-collection.page/create-collection.page.component'
import ErrorPageComponent                from '../pages/error.page/error.page.component'
import HomePage                 from '../pages/home.page/home.page.component'
import LandingPageComponent              from '../pages/landing.page/landing.page.component'
import LoginPageComponent                from '../pages/login.page/login.page.component'
import RegisterPageComponent             from '../pages/register.page/register.page.component'

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
            errorElement: <ErrorPageComponent />,
            children: [
                {
                    index: true,
                    element: <LandingPageComponent />
                },
                {
                    path: 'login',
                    element: <LoginPageComponent />
                },
                {
                    path: 'register',
                    element: <RegisterPageComponent />
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
                            element: <CreateCollectionPageComponent />
                        },
                        {
                            path: ':collectionId',
                            children: [
                                {
                                    index: true,
                                    element: <CollectionDetailsPageComponent />
                                },
                                {
                                    path: 'edit',
                                    element: <CollectionEditorPageComponent />
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