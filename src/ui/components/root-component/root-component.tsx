//Router
import { Route, Routes, useLocation } from 'react-router-dom'
//Components
import PreloaderComponent               from '../preloader/preloader.component'
import CollectionPageComponent          from '../pages/collection.page/collection.page.component'
import CreateCollectionPageComponent    from '../pages/create-collection.page/create-collection.page.component'
import ErrorPageComponent               from '../pages/error.page/error.page.component'
import HomePageComponent                from '../pages/home.page/home.page.component'
import LandingPageComponent             from '../pages/landing.page/landing.page.component'
import HelpPageComponent                from '../pages/help.page/help-page.component'
import FAQPageComponent                 from '../pages/faq.page/faq-page.component'
import ContactPageComponent             from '../pages/contact.page/contact.page.component'
import GamePageComponent                from '../pages/game.page/game.page.component'
//Layouts
import AuthLayoutComponent      from '../layouts/auth/auth.layout.component'
//Containers
import LoginFormContainer       from '../auth-form/containers/login-form/login-form.container'
import RegisterFormContainer    from '../auth-form/containers/register-form/register-form.container'
import ModalComponent from '../modal/modal.component'
import CardPageComponent from '../pages/card.page/card.page.component'

/**
 * Route container element for application to render
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const RootComponent = (): JSX.Element => {

    //Get location
    const location = useLocation()

    //Get state as background location
    const state = location.state as { backgroundLocation?: Location }

    return (
        <>
                <Routes location={state?.backgroundLocation || location}>

                    <Route path='/' element={<PreloaderComponent />}>

                        <Route index element={<LandingPageComponent />} />

                        <Route path='new' element={<CreateCollectionPageComponent />} />

                        <Route path='faq' element={<FAQPageComponent />} />

                        <Route path='contact' element={<ContactPageComponent />} />

                        <Route path='auth' element={<AuthLayoutComponent />}>

                            <Route path='login' element={<LoginFormContainer />} />
                            <Route path='register' element={<RegisterFormContainer />} />

                        </Route>

                        <Route path='user' >
                            
                            <Route index element={<HomePageComponent />} />
                            <Route path='help' element={<HelpPageComponent />} />
                            
                            <Route path='collection'>
                                <Route index element={<CollectionPageComponent />} />
                                <Route path='play' element={<GamePageComponent />} />
                                <Route path='card' element={<CardPageComponent />} />
                                <Route path='info' element={<CreateCollectionPageComponent />} />
                            </Route>

                        </Route>

                        <Route path='*' element={<ErrorPageComponent />} />

                    </Route>

                </Routes>

                {/* Show the modal when a `backgroundLocation` is set */}
                {state?.backgroundLocation && (
                    <Routes>
                        <Route path='auth' element={<ModalComponent />} >
                            <Route path='login' element={<LoginFormContainer />} />
                            <Route path='register' element={<RegisterFormContainer />} />
                        </Route>

                        <Route path='user' element={<ModalComponent />} >
                            <Route path='help' element={<HelpPageComponent />} />
                            <Route path='collection'>
                                <Route path='info' element={<CreateCollectionPageComponent />} />
                                <Route path='card' element={<CardPageComponent />} />
                            </Route>
                            {/* TODO add help, edit collection, create/edit card :) */}
                        </Route>

                    </Routes>
                )}
        </>

        
    )

}

export default RootComponent