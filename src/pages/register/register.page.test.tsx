import RegisterPage from './register.page'
import { render as rtlRender, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import { MemoryRouter } from 'react-router-dom'

import { IntlProvider } from 'react-intl'
import enMessages from '../../localization/en.json'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUseNavigate
}))

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

describe('RegisterPage', () => {

    test('RegisterPage should exist', () => {

        let { container } = renderComponent(<RegisterPage />)
        expect(container).toBeInTheDocument()
    })

    test('Register page should redirect to home if user already authenticated', () => {

        //TBD after persist user authentication VBF-9
    })

    describe('Register page register functionality', () => {

        describe('required user inputs present', () => {

            test('RegisterPage should have username input', () => {
                renderComponent(<RegisterPage />)
                expect(screen.getByRole('username-input')).toBeInTheDocument()
            })

            test('RegisterPage should have email input', () => {
                renderComponent(<RegisterPage />)
                expect(screen.getByRole('email-input')).toBeInTheDocument()
            })

            test('RegisterPage should have password input', () => {
                renderComponent(<RegisterPage />)
                expect(screen.getByRole('password-input')).toBeInTheDocument()
            })

            test('RegisterPage should have confirm password input', () => {
                renderComponent(<RegisterPage />)
                expect(screen.getByRole('confirm-password-input')).toBeInTheDocument()
            })
        })

        test('Register button should make API call to api/auth/register on click', () => {

            //TBD
        })

        test('Register page should redirect to login page on succesful register', () => {

            //TBD
        })
    })

})