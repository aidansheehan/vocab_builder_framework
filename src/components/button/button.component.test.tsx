import React from 'react'
import { IntlProvider } from 'react-intl'
import ButtonComponent from './button.component'
import enMessages from '../../localization/en.json'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const renderComponent = (ui, { locale = 'en', ...renderOptions} = {}) => {

    const enMessagesWithTest = { ...enMessages, "test-ref": "test-text" }

    const Wrapper = ({children}) => (
        <IntlProvider locale={locale} messages={enMessagesWithTest}>
            {children}
        </IntlProvider>
    )

    return render(ui, {wrapper: Wrapper, ...renderOptions})
}

describe('ButtonComponent', () => {

    test('ButtonComponent should exist', () => {

        const onClick = jest.fn()

        const { container } = renderComponent(<ButtonComponent onClick={onClick} />)

        expect(container).toBeInTheDocument()
    })

    test('ButtonComponent should call onClick callback when clicked', () => {

        const user = userEvent.setup()

        const onClick = jest.fn()
        renderComponent(<ButtonComponent onClick={onClick} textRef={'test-ref'} />)
        user.click(screen.getByText('test-text'))
    })
})