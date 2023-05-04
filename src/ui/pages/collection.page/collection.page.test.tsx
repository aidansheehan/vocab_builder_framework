import { render } from '@testing-library/react'
import React from 'react'
import CollectionPage from './collection.page'

describe('CollectionDetailsPage', () => {

    test('CollectionDetailsPage should exist', () => {

        let { container } = render(<CollectionPage />)
        expect(container).toBeInTheDocument()
    })
})