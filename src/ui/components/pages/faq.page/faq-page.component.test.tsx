import React from 'react'
import { render } from '@testing-library/react'
import FAQPage from './faq-page'

describe('FAQPage', () => {

    test('FAQPage should exist', () => {

        const { container } = render(< FAQPage />)
        expect(container).toBeInTheDocument()
    })
})