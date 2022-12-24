import LoginPage from './login.page'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'

import { IntlProvider } from 'react-intl'
import { MemoryRouter } from 'react-router-dom'
import enMessages from '../../localization/en.json'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUseNavigate
}))

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

describe('LoginPage', () => {

    test('LoginPage should exist', () => {

        let { container } = renderComponent(<LoginPage />)
        expect(container).toBeInTheDocument()
    })

    test('LoginPage should redirect to home if user already authenticated', () => {

        //TBD after persist user authentication VBF-9
    })

    describe('LoginPage functionality', () => {

        describe('required user inputs present', () => {

            test('LoginPage should have email input', () => {
                renderComponent(<LoginPage />)
                expect(screen.getByRole('email-input')).toBeInTheDocument()
            })

            test('LoginPage should have password input', () => {
                renderComponent(<LoginPage />)
                expect(screen.getByRole('password-input')).toBeInTheDocument()
            })

            test('LoginPage should have login submit button', () => {
                renderComponent(<LoginPage />)
                expect(screen.getByRole('login-submit')).toBeInTheDocument()
            })
        })

        test('Makes api call to api/auth/login on submit', () => {

            //TBD
        })

        test('LoginPage should redirect to home page on successful login', () => {

            //TBD
        })

    })
})