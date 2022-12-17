import { render } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import ErrorPage from './error.page'

jest.mock('react-router-dom', () => ({
    useRouteError: () => ({
        statusText: 'error text',
        message: 'error text'
    })
}))

describe('ErrorPage', () => {

    test('ErrorPage should exist', () => {

        //TODO

        let { container } = render(<ErrorPage />)
        expect(container).toBeInTheDocument()
    })
})