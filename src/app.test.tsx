import App from './app'
import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import userEvent from '@testing-library/user-event'

/**
 * App component should test each individual route calling 
 * navigate() or MemoryRouter.navigate() or whatever, and check
 * div's with given test-ids are in each route
 * 
 */

jest.mock("axios", () => {
    return {
        defaults: {
            headers: {
                common: {
                    Authorization: ""
                }
            }
        }
    }
})

const renderApp = (iE_?: Array<string>) => {

    return render(
        <MemoryRouter initialEntries={iE_}>
            <Provider store={store}>
                <App />
            </Provider>
        </MemoryRouter>
    )
}

describe('AppComponent', () => {

    test('AppComponent should exist', () => {

        let { container } = renderApp()

        expect(container).toBeInTheDocument()

    })

    describe('AppComponent should contain unauthenticated routes', () => {

        const user = userEvent.setup()

        test('unprotected route', () => {

            renderApp(['/'])
            expect(screen.getByTestId('unprotected-route')).toBeInTheDocument()

        })

        test('error element', () => {

            //TBD as error handling not yet properly implemented!

            // renderApp(['/somenonsense'])
            // expect(screen.getByTestId('error-page')).toBeInTheDocument()

        })

        test('landing', () => {

            renderApp(['/'])
            expect(screen.getByTestId('landing-page')).toBeInTheDocument()

        })

        test('login', () => {

            renderApp(['/login'])
            expect(screen.getByTestId('login-page')).toBeInTheDocument()

        })

        test('register', () => {

            renderApp(['/register'])
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