//Router
import { Route, Routes, useLocation } from 'react-router-dom'
//Components
import PreloaderComponent               from '../preloader/preloader.component'
import ModalComponent                   from '../modal/modal.component'
//Pages
import CollectionPage          from '../../pages/collection.page/collection.page'
import CreateCollectionPage    from '../../pages/create-collection.page/create-collection.page'
import ErrorPage               from '../../pages/error.page/error.page'
import HomePage                from '../../pages/home.page/home.page'
import LandingPage             from '../../pages/landing.page/landing.page.component'
import HelpPage                from '../../pages/help.page/help-page'
import FAQPage                 from '../../pages/faq.page/faq-page'
import ContactPage             from '../../pages/contact.page/contact.page.component'
import GamePage                from '../../pages/game.page/game.page'
import CardPage                from '../../pages/card.page/card.page'
//Layouts
import AuthLayout      from '../../layouts/auth/auth.layout'
//Containers
import LoginFormContainer       from '../auth-form/containers/login-form/login-form.container'
import RegisterFormContainer    from '../auth-form/containers/register-form/register-form.container'
import GameQuestionContainer    from '../../pages/game.page/containers/game-question.container'
import GameFinishPage           from '../../pages/game-finish.page/game-finish.page'

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

                        <Route index element={<LandingPage />} />

                        <Route path='new' element={<CreateCollectionPage />} />

                        <Route path='faq' element={<FAQPage />} />

                        <Route path='contact' element={<ContactPage />} />

                        <Route path='auth' element={<AuthLayout />}>

                            <Route path='login' element={<LoginFormContainer />} />
                            <Route path='register' element={<RegisterFormContainer />} />

                        </Route>

                        <Route path='user' >
                            
                            <Route index element={<HomePage />} />
                            <Route path='help' element={<HelpPage />} />
                            
                            <Route path='collection'>
                                <Route index element={<CollectionPage />} />
                                <Route path='play' element={<GamePage />} >
                                    <Route path='question/:questionNumber' element={<GameQuestionContainer />} />
                                    <Route path='finish' element={<GameFinishPage />} />
                                </Route>
                                <Route path='card' element={<CardPage />} />
                                <Route path='info' element={<CreateCollectionPage />} />
                            </Route>

                        </Route>

                        <Route path='*' element={<ErrorPage />} />

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
                            <Route path='help' element={<HelpPage />} />
                            <Route path='collection'>
                                <Route path='info' element={<CreateCollectionPage />} />
                                <Route path='card' element={<CardPage isModal={true} />} />
                            </Route>
                            {/* TODO add help, edit collection, create/edit card :) */}
                        </Route>

                    </Routes>
                )}
        </>

        
    )

}

export default RootComponent