import { render, screen }           from "@testing-library/react"
import HeaderComponent              from "./header.component"
import React                        from "react"
import { Provider }                 from 'react-redux'
import store                        from '../../redux/store'
import { createMemoryHistory }      from 'history'
import { MemoryRouter }             from "react-router-dom"
import userEvent                    from '@testing-library/user-event'

jest.mock('axios', () => {
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

const renderHeader = (iE_?: Array<string>) => {

    return render(
        <MemoryRouter initialEntries={iE_}>
            <Provider store={store}>
                <HeaderComponent />
            </Provider>
        </MemoryRouter>
    )
}

describe('HeaderComponent', () => {

    test('HeaderComponent should exist', () => {

        const { container } = renderHeader()

        expect(container).toBeInTheDocument()
    })

    describe('HeaderComponent should route to appropriate routes if user unauthenticated', () => {

        const history = createMemoryHistory()

        history.push = jest.fn()
    
        const user = userEvent.setup()

        test('navigate to login', () => {
            renderHeader()
            expect(screen.getByTestId('login-link')).toBeInTheDocument()
            user.click(screen.getByTestId('login-link')).then(() => expect(history.push).toBeCalledWith('/login'))

        })

        test('navigate to register', () => {
            renderHeader()
            expect(screen.getByTestId('register-link')).toBeInTheDocument()
            user.click(screen.getByTestId('register-link')).then(() => expect(history.push).toBeCalledWith('/register'))
            
        })

        test('navigate to landing page', () => {
            renderHeader()
            expect(screen.getByTestId('landing-link')).toBeInTheDocument()
            user.click(screen.getByTestId('landing-link')).then(() => expect(history.push).toBeCalledWith('/'))
        })

        test('no other navigations', async () => {
            renderHeader()
            const navLinks = await screen.findAllByRole('nav-link')
            expect(navLinks).toHaveLength(3)
        })
    })

    describe('HeaderComponent should generate appropriate links if user authenticated', () => {

        /**
         * TBD
         *  - to be implemented after persist user authentication on refresh implemented (VBF-9) as can mock localStorage, API call
         */

        test('navigate to collections', () => {

        })

        test('user can logout', () => {

            //TBD mock logout function and check this can be called from header
        })
    })

})