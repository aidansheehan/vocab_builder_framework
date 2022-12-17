import { render } from '@testing-library/react'
import React from 'react'
import GamePage from './game.page'

describe('GamePage', () => {

    test('GamePage should exist', () => {

        let { container } = render(<GamePage />)
        expect(container).toBeInTheDocument()
    })
})