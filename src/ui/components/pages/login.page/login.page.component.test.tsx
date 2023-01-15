import LoginPageComponent from './login.page.component'
import { screen } from '@testing-library/react'
import React from 'react'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUseNavigate
}))

describe('LoginPageComponent', () => {

    test('LoginPageComponent should exist', () => {

        let { container } = renderComponent(<LoginPageComponent />)
        expect(container).toBeInTheDocument()
    })

    test('LoginPageComponent should redirect to home if user already authenticated', () => {

        //TBD after persist user authentication VBF-9
    })

    describe('LoginPageComponent functionality', () => {

        describe('required user inputs present', () => {

            test('LoginPageComponent should have email input', () => {
                renderComponent(<LoginPageComponent />)
                expect(screen.getByRole('email-input')).toBeInTheDocument()
            })

            test('LoginPageComponent should have password input', () => {
                renderComponent(<LoginPageComponent />)
                expect(screen.getByRole('password-input')).toBeInTheDocument()
            })

            test('LoginPageComponent should have login submit button', () => {
                renderComponent(<LoginPageComponent />)
                expect(screen.getByRole('login-submit')).toBeInTheDocument()
            })
        })

        test('Makes api call to api/auth/login on submit', () => {

            //TBD
        })

        test('LoginPageComponent should redirect to home page on successful login', () => {

            //TBD
        })

    })
})