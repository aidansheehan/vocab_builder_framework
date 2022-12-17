import { render as rtlRender, screen }      from "@testing-library/react"
import HeaderComponent                      from "./header.component"
import React                                from "react"
import { Provider }                         from 'react-redux'
import store                                from '../../redux/store'
import { createMemoryHistory }              from 'history'
import { MemoryRouter }                     from "react-router-dom"
import userEvent                            from '@testing-library/user-event'
import enMessages                           from '../../localization/en.json'
import { IntlProvider }                     from 'react-intl'


const renderComponent = (ui, {locale = 'en', ...renderOptions} = {}, iE_?: Array<string>) => {

    const CombinedWrapper = ({children}) => (
        <IntlProvider locale={locale} messages={enMessages}>
            <MemoryRouter initialEntries={iE_}>
                <Provider store={store} >
                    {children}
                </Provider>
            </MemoryRouter>
        </IntlProvider>
    )

    return rtlRender(ui, {wrapper: CombinedWrapper, ...renderOptions})
}

const intlRoute = (r_: string) => {

}

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

        test('navigate to register', () => {
            renderComponent(<HeaderComponent />)
            expect(screen.getByTestId('register-link')).toBeInTheDocument()
            user.click(screen.getByTestId('register-link')).then(() => expect(history.push).toBeCalledWith('/en/register'))
            
        })

        test('navigate to landing page', () => {
            renderComponent(<HeaderComponent />)
            expect(screen.getByTestId('landing-link')).toBeInTheDocument()
            user.click(screen.getByTestId('landing-link')).then(() => expect(history.push).toBeCalledWith('/en'))
        })

        test('no other navigations', async () => {
            renderComponent(<HeaderComponent />)
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