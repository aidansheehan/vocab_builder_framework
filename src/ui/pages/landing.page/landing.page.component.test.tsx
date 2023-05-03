import React from 'react'
import LandingPage from './landing.page.component'


describe('LandingPage', () => {

    test('LandingPage should exist', () => {

        let { container } = renderComponent(<LandingPage />)
        expect(container).toBeInTheDocument()
    })
})