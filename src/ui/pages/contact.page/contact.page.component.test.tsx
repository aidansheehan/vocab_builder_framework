import React from 'react'
import { render } from '@testing-library/react'
import ContactPage from './contact.page.component'

describe('ContactPage', () => {

    test('ContactPage should exist', () => {

        const { container } = render(<ContactPage />)
        expect(container).toBeInTheDocument()
    })
})