//Router
import { useRoutes } from 'react-router-dom'
//Components
import PreloaderComponent from '../preloader/preloader.component'
//Pages
import CollectionDetailsPage    from '../../pages/collection-details/collection-details.page'
import CollectionEditorPage     from '../../pages/collection-editor/collection-editor.page'
import CreateCollectionPage     from '../../pages/create-collection/create-collection.page'
import ErrorPage                from '../../pages/error/error.page'
import HomePage                 from '../../pages/home/home.page'
import LandingPage              from '../../pages/landing/landing.page'
import LoginPage                from '../../pages/login/login.page'
import RegisterPage             from '../../pages/register/register.page'
import HelpPage                 from '../../pages/help/help-page'
import FAQPage                  from '../../pages/faq/faq-page'
import ContactPage              from '../../pages/contact/contact.page'

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
                    path: 'faq',
                    element: <FAQPage />
                },
                {
                    path: 'contact',
                    element: <ContactPage />
                },
                {
                    path: 'user',    //TODO i think these routes should be on user/ not collections/
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
                            path: 'help',
                            element: <HelpPage />
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