import { render } from '@testing-library/react'
import React from 'react'
import CollectionEditorPage from './collection-editor.page'

describe('CollectionEditorPage', () => {

    test('CollectionEditorPage should exist', () => {

        let { container } = render(<CollectionEditorPage />)
        expect(container).toBeInTheDocument()
    })
})