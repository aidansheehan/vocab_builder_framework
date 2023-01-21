import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import enMessages from '../src/i18n/en.json'
import store from '../src/redux/store'
const axios = require('axios')

//Function to render components with required wrapper functions
global.renderComponent = (ui, {locale = 'en', ...renderOptions} = {}, iE_) => {

    const CombinedWrapper = ({children}) => (
        <Provider store={store}>
            <IntlProvider locale={locale} messages={enMessages}>
                <MemoryRouter initialEntries={iE_}>
                    {children}
                </MemoryRouter>
            </IntlProvider>
        </Provider>
    )

    return render(ui, {wrapper: CombinedWrapper, ...renderOptions})
}

jest.mock('react-intl', () => {
    const reactIntl = jest.requireActual('react-intl');
    const intl      = reactIntl.createIntl({
        locale: 'en'
    })
    return {
        ...reactIntl,
        useIntl: () => intl,
    }
});

jest.mock('axios', () => {
    return {
        create: () => {
            return {

                defaults: {
                    baseURL: 'testURL',
                    headers: {
                        common: {
                            Authorization: ''
                        }
                    }
                },
                default: {
                    interceptors: {
                        request: { use: jest.fn(() => {}) },
                        response: { use: jest.fn(() => {}) }
                    }
                },
                interceptors: {
                    request: {
                        use: jest.fn(),
                        eject: jest.fn()
                    },
                    response: {
                        use: jest.fn(),
                        eject: jest.fn()
                    }
                },
                
                get: jest.fn()
            }
        }
    }
})