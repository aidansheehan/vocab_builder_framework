import TextComponent    from './text.component'
import { render }       from '@testing-library/react'
import React            from 'react'
import { IntlProvider } from 'react-intl'

const mockMessages = {
    "en": {
        "nav_home_link_title": "test"
    },
    "vi": {
        "nav_home_link_title": "Test 2"
    }
}

const renderWithReactIntl = (component, locale) => {
    return render(
        <IntlProvider locale={locale} messages={mockMessages[locale]}>
            {component}
        </IntlProvider>
    )
}

describe('TextComponent', () => {

    test('TextComponent should exist', () => {

        let { container } = renderWithReactIntl(<TextComponent textRef={'nav_home_link_title'} />, 'en')
        expect(container).toBeInTheDocument()
    })

    test('TextComponent should display localized text', () => {
        let { container } = renderWithReactIntl(<TextComponent textRef={'nav_home_link_title'} />, 'en')

        console.log('container: ', container.textContent)
        expect(container).toHaveTextContent('test')
    })

    test('TextComponent should handle translation not found errors', () => {

        //TBD must decide how to gracefully handle these errors
    })
})