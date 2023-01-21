import { render } from '@testing-library/react'
import React from 'react'
import { HashRouter } from 'react-router-dom'
import ErrorPageComponent from './error.page.component'

jest.mock('react-router-dom', () => ({
    useRouteError: () => ({
        statusText: 'error text',
        message: 'error text'
    })
}))

describe('ErrorPageComponent', () => {

    test('ErrorPageComponent should exist', () => {

        //TODO

        let { container } = render(<ErrorPageComponent />)
        expect(container).toBeInTheDocument()
    })
})