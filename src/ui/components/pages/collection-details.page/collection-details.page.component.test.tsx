import { render } from '@testing-library/react'
import React from 'react'
import CollectionDetailsPageComponent from './collection-details.page.component'

describe('CollectionDetailsPageComponent', () => {

    test('CollectionDetailsPageComponent should exist', () => {

        let { container } = render(<CollectionDetailsPageComponent />)
        expect(container).toBeInTheDocument()
    })
})