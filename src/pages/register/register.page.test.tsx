import RegisterPage from './register.page'
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

const renderRegisterPage = () => {

    return render(
        <Provider store={store}>
            <RegisterPage />
        </Provider>
    )
}

describe('RegisterPage', () => {

    test('RegisterPage should exist', () => {

        let { container } = renderRegisterPage()
        expect(container).toBeInTheDocument()
    })

    test('Register page should redirect to home if user already authenticated', () => {

        //TBD after persist user authentication VBF-9
    })

    describe('Register page register functionality', () => {

        describe('required user inputs present', () => {

            test('RegisterPage should have username input', () => {
                renderRegisterPage()
                expect(screen.getByRole('username-input')).toBeInTheDocument()
            })

            test('RegisterPage should have email input', () => {
                renderRegisterPage()
                expect(screen.getByRole('email-input')).toBeInTheDocument()
            })

            test('RegisterPage should have password input', () => {
                renderRegisterPage()
                expect(screen.getByRole('password-input')).toBeInTheDocument()
            })

            test('RegisterPage should have confirm password input', () => {
                renderRegisterPage()
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