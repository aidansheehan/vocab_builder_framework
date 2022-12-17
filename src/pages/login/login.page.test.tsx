import LoginPage from './login.page'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'

jest.mock('axios', () => {
    return {
        defaults: {
            headers: {
                common: {
                    Authorization: ''
                }
            }
        }
    }
})

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUseNavigate
}))

const renderLoginPage = () => {

    return render(
        <Provider store={store}>
            <LoginPage />
        </Provider>
    )
}

describe('LoginPage', () => {

    test('LoginPage should exist', () => {

        let { container } = renderLoginPage()
        expect(container).toBeInTheDocument()
    })

    test('LoginPage should redirect to home if user already authenticated', () => {

        //TBD after persist user authentication VBF-9
    })

    describe('LoginPage functionality', () => {

        describe('required user inputs present', () => {

            test('LoginPage should have email input', () => {
                renderLoginPage()
                expect(screen.getByRole('email-input')).toBeInTheDocument()
            })

            test('LoginPage should have password input', () => {
                renderLoginPage()
                expect(screen.getByRole('password-input')).toBeInTheDocument()
            })

            test('LoginPage should have login submit button', () => {
                renderLoginPage()
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