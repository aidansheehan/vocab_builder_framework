import { render } from '@testing-library/react'
import React from 'react'
import GamePageComponent from './game.page.component'

describe('GamePageComponent', () => {

    test('GamePageComponent should exist', () => {

        let { container } = render(<GamePageComponent />)
        expect(container).toBeInTheDocument()
    })
})