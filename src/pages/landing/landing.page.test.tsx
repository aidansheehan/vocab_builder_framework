import { render } from '@testing-library/react'
import React from 'react'
import LandingPage from './landing.page'

describe('LandingPage', () => {

    test('LandingPage should exist', () => {

        let { container } = render(<LandingPage />)
        expect(container).toBeInTheDocument()
    })
})