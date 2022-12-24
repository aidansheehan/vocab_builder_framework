import LocaleSelectorComponent from './locale-selector.component'
import { render, screen } from '@testing-library/react'
import React, { createContext } from 'react'
import userEvent from '@testing-library/user-event'

describe('LocaleSelectorComponent', () => {

    test('LocaleSelectorComponent should exist', () => {

        const { container } = render(<LocaleSelectorComponent />)
        expect(container).toBeInTheDocument()
    })

    describe('LocaleSelectorComponent functionality', () => {

        test('Calls setLocale on select new locale', () => {

            const user = userEvent.setup()

            const mockLocale = 'en'
            const mockSetLocale = jest.fn()

            const MockLocaleContext = createContext({locale: mockLocale, setLocale: mockSetLocale})

            render(<MockLocaleContext.Provider value={{locale: mockLocale, setLocale: mockSetLocale}} ><LocaleSelectorComponent /></MockLocaleContext.Provider>)

            user.click(screen.getByText('Tiếng Việt')).then(() => expect(mockSetLocale).toBeCalledWith('vi'))


        })
    })
})