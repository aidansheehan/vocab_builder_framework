import { render, screen, act } from '@testing-library/react'
import React from 'react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import RouterComponent from './router-component'

import store from '../../redux/store'
import enMessages from '../../localization/en.json'

jest.mock('../preloader/preloader.component.tsx', () => () => {
    return <div></div>
})

const renderRouter = (ui, {locale = 'en', ...renderOptions} = {}) => {

    const Wrapper = ({children}) => (
        <Provider store={store} >
            <IntlProvider locale={locale} messages={enMessages}>
                {children}
            </IntlProvider>
        </Provider>
    )

    return render(ui, {wrapper: Wrapper, ...renderOptions})
}

describe('RouterComponent', () => {

    it('renders the RootComponent', async () => {

        const { container } = renderRouter(<RouterComponent />)
        expect(container).toBeInTheDocument()

    })
})