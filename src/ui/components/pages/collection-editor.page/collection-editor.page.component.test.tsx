import { render } from '@testing-library/react'
import React from 'react'
import CollectionEditorPageComponent from './collection-editor.page.component'

describe('CollectionEditorPageComponent', () => {

    test('CollectionEditorPageComponent should exist', () => {

        let { container } = render(<CollectionEditorPageComponent />)
        expect(container).toBeInTheDocument()
    })
})