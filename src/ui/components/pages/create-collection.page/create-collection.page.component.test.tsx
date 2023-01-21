import { render } from '@testing-library/react'
import React from 'react'
import CreateCollectionPageComponent from './create-collection.page.component'

describe('CreateCollectionPageComponent', () => {

    test('CreateCollectionPageComponent should exist', () => {

        let { container } = render(<CreateCollectionPageComponent />)
        expect(container).toBeInTheDocument()
    })
})