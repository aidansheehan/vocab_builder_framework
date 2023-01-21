import RegisterPageComponent from './register.page.component'
import { screen } from '@testing-library/react'
import React from 'react'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUseNavigate
}))

describe('RegisterPageComponent', () => {

    test('RegisterPageComponent should exist', () => {

        let { container } = renderComponent(<RegisterPageComponent />)
        expect(container).toBeInTheDocument()
    })

    test('Register page should redirect to home if user already authenticated', () => {

        //TBD after persist user authentication VBF-9
    })

    describe('Register page register functionality', () => {

        describe('required user inputs present', () => {

            test('RegisterPageComponent should have username input', () => {
                renderComponent(<RegisterPageComponent />)
                expect(screen.getByRole('username-input')).toBeInTheDocument()
            })

            test('RegisterPageComponent should have email input', () => {
                renderComponent(<RegisterPageComponent />)
                expect(screen.getByRole('email-input')).toBeInTheDocument()
            })

            test('RegisterPageComponent should have password input', () => {
                renderComponent(<RegisterPageComponent />)
                expect(screen.getByRole('password-input')).toBeInTheDocument()
            })

            test('RegisterPageComponent should have confirm password input', () => {
                renderComponent(<RegisterPageComponent />)
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