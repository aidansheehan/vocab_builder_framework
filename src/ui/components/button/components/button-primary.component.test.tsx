import React from 'react'
import { render } from '@testing-library/react'
import ButtonPrimaryComponent from './button-primary.component'

describe('ButtonPrimaryComponent', () => {

    test('ButtonPrimaryComponent should exist', () => {

        const onClick = jest.fn()

        let { container } = render(<ButtonPrimaryComponent onClick={onClick} />)
        expect(container).toBeInTheDocument()
    })
})