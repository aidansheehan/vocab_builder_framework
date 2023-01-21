import { screen }                           from '@testing-library/react'
import HeaderComponent                      from './header.component'
import React                                from 'react'
import { createMemoryHistory }              from 'history'
import userEvent                            from '@testing-library/user-event'

describe('HeaderComponent', () => {

    test('HeaderComponent should exist', () => {

        const { container } = renderComponent(<HeaderComponent/>)

        expect(container).toBeInTheDocument()
    })

    describe('HeaderComponent should route to appropriate routes if user unauthenticated', () => {

        const history = createMemoryHistory()

        history.push = jest.fn()
    
        const user = userEvent.setup()

        test('navigate to login', () => {
            renderComponent(<HeaderComponent/>)
            expect(screen.getByTestId('login-link')).toBeInTheDocument()
            user.click(screen.getByTestId('login-link')).then(() => expect(history.push).toBeCalledWith('en/login'))

        })

        test('navigate to landing page', () => {
            renderComponent(<HeaderComponent />)
            expect(screen.getByTestId('landing-link')).toBeInTheDocument()
            user.click(screen.getByTestId('landing-link')).then(() => expect(history.push).toBeCalledWith('/en'))
        })

        test('no other navigations', async () => {
            renderComponent(<HeaderComponent />)
            const navLinks = await screen.findAllByRole('nav-link')
            expect(navLinks).toHaveLength(2)
        })
    })

    describe('HeaderComponent should generate appropriate links if user authenticated', () => {

        /**
         * TBD
         *  - to be implemented after persist user authentication on refresh implemented (VBF-9) as can mock localStorage, API call
         */

        test('navigate to collections', () => {

            //TBD

        })

        test('navigate to new collection', () => {

            //TBD

        })

        test('user can logout', () => {

            //TBD 
        })
    })

})