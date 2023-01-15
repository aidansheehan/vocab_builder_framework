import React from 'react'
import LandingPageComponent from './landing.page.component'


describe('LandingPageComponent', () => {

    test('LandingPageComponent should exist', () => {

        let { container } = renderComponent(<LandingPageComponent />)
        expect(container).toBeInTheDocument()
    })
})