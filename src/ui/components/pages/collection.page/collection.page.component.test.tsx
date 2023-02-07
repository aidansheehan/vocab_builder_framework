import { render } from '@testing-library/react'
import React from 'react'
import CollectionPageComponent from './collection.page.component'

describe('CollectionDetailsPageComponent', () => {

    test('CollectionDetailsPageComponent should exist', () => {

        let { container } = render(<CollectionPageComponent />)
        expect(container).toBeInTheDocument()
    })
})