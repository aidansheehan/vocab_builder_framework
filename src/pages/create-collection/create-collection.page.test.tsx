import { render } from '@testing-library/react'
import React from 'react'
import CreateCollectionPage from './create-collection.page'

describe('CreateCollectionPage', () => {

    test('CreateCollectionPage should exist', () => {

        let { container } = render(<CreateCollectionPage />)
        expect(container).toBeInTheDocument()
    })
})