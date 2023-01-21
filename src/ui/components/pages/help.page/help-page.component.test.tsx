import React from 'react'
import HelpPage from './help-page'
import { render } from '@testing-library/react'

describe('HelpPage', () => {

    test('HelpPage should exist', () => {

        let { container } = render(<HelpPage />)
        expect(container).toBeInTheDocument()
    })

})