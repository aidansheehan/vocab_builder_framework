import { render } from "@testing-library/react"
import React from "react"
import CollectionDetailsPage from './collection-details.page'

describe('CollectionDetailsPage', () => {

    test('CollectionDetailsPage should exist', () => {

        let { container } = render(<CollectionDetailsPage />)
        expect(container).toBeInTheDocument()
    })
})