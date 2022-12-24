import App from './app'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import { IntlProvider } from 'react-intl'
import enMessages from './localization/en.json'

const renderComponent = (ui, {locale = 'en', ...renderOptions} = {}, iE_?: Array<string>) => {

    const CombinedWrapper = ({children}) => (
        <IntlProvider locale={locale} messages={enMessages} >
            <MemoryRouter initialEntries={iE_}>
                <Provider store={store} >
                    {children}
                </Provider>
            </MemoryRouter>
        </IntlProvider>
    )

    return render(ui, {wrapper: CombinedWrapper, ...renderOptions})
}

describe('AppComponent', () => {

    test('AppComponent should exist', () => {
        let { container } = renderComponent(<App />)
        expect(container).toBeInTheDocument()
    })

    describe('AppComponent should contain unauthenticated routes', () => {

        test('unprotected route', () => {

            renderComponent(<App />, {}, ['/'])
            expect(screen.getByTestId('unprotected-route')).toBeInTheDocument()

        })

        test('error element', () => {

            //TBD as error handling not yet properly implemented

            // renderApp(['/somenonsense'])
            // expect(screen.getByTestId('error-page')).toBeInTheDocument()

        })

        test('landing', () => {

            renderComponent(<App />, {}, ['/'])
            expect(screen.getByTestId('landing-page')).toBeInTheDocument()

        })

        test('login', () => {

            renderComponent(<App />, {}, ['/login'])
            expect(screen.getByTestId('login-page')).toBeInTheDocument()

        })

        test('register', () => {

            renderComponent(<App />, {}, ['/register'])
            expect(screen.getByTestId('register-page')).toBeInTheDocument()

        })

    })

    describe('AppComponent should contain authenticated routes', () => {

        /**
         * TBD
         *  - to be implemented after persist user authentication on refresh implemented (VBF-9) as can mock localStorage, API call
         *  - best approach is to use real store and mock API calls and local storage around it
         *  - if not alternative approach may have to mock redux store with a fake authenticated user
         */

        test('protected route', () => {

        })

        test('error element', () => {

        })

        test('home', () => {

        })

        test('new collection', () => {
            
        })

        test('collection details (for 1 collection)', () => {

        })

        test('collection edit for 1 collection', () => {

        })

    })

})