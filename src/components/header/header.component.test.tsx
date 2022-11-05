import { render, screen }           from "@testing-library/react"
import HeaderComponent              from "./header.component"
import { MemoryRouter }             from "react-router-dom"
import React                        from "react"
import userEvent                    from '@testing-library/user-event'

describe('HeaderComponent', () => {

    test('HeaderComponent should exist', () => {

        const { container } = render(<HeaderComponent />, {wrapper: MemoryRouter})

        expect(container).toBeInTheDocument()
    })

    test('HeaderComponent should navigate to other views', async () => {

        //TBD
    })
})