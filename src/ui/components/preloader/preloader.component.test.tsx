import PreloaderComponent from './preloader.component'
import React from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'

import enMessages from '../../localization/en.json'
import store from '../../redux/store'
import { render } from '@testing-library/react'

jest.mock('../hooks/redux/use-app-dispatch.hook.ts', () => jest.fn(() => jest.fn()))

jest.mock('../../redux/features/user/user.actions.ts', () => ({
    getUserDetails: jest.fn(() => Promise.resolve())
}))

const renderPreloader = (ui, {locale = 'en', ...renderOptions} = {}) => {

    const Wrapper = ({children}) => (
        <Provider store={store} >
            <IntlProvider locale={locale} messages={enMessages} >
                {children}
            </IntlProvider>
        </Provider>
    )

    return render(ui, {wrapper: Wrapper, ...renderOptions})
}

describe('PreloaderComponent', () => {

    //TBD see https://redux.js.org/usage/writing-tests - may need an additional library like msw https://www.npmjs.com/package/msw

    test('Returns loader state when waiting for getUserDetails', () => {

    })

    test('Renders App component once getUserDetails resolved', () => {

    })

}) 