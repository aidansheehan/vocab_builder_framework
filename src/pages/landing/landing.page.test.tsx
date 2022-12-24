import { render } from '@testing-library/react'
import React from 'react'
import { IntlProvider } from 'react-intl'
import LandingPage from './landing.page'
import enMessages from '../../localization/en.json'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'

const renderComponent = (ui, {locale = 'en', ...renderOptions} = {}, iE_?: Array<string>) => {

    const CombinedWrapper =({children}) => (
        <IntlProvider locale={locale} messages={enMessages}>
            <MemoryRouter initialEntries={iE_} >
                <Provider store={store}>
                    {children}
                </Provider>
            </MemoryRouter>
        </IntlProvider>
    )

    return render(ui, {wrapper: CombinedWrapper, ...renderOptions})
}

describe('LandingPage', () => {

    test('LandingPage should exist', () => {

        let { container } = renderComponent(<LandingPage />)
        expect(container).toBeInTheDocument()
    })
})