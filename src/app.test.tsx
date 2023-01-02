import App from './app'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import { IntlProvider } from 'react-intl'
import enMessages from './localization/en.json'

const renderComponent = (ui, {locale = 'en', ...renderOptions} = {}, iE_?: Array<string>) => {

    const CombinedWrapper = ({children}) => (
        <IntlProvider locale={locale} messages={enMessages} >
            <MemoryRouter initialEntries={iE_}>
                <Provider store={store} >
                    {children}
                </Provider>
            </MemoryRouter>
        </IntlProvider>
    )

    return render(ui, {wrapper: CombinedWrapper, ...renderOptions})
}

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUseNavigate
}))

describe('AppComponent', () => {

    test('AppComponent should exist', () => {
        let { container } = renderComponent(<App />)
        expect(container).toBeInTheDocument()
    })

    it('Should protect collections routes from unauthenticated users', () => {

        //TBD need to mock auth - should be done after VBF-8 refactor redux into two stores (on that ticket)

        // renderComponent(<App />, {}, ['/collections'])
        // expect(mockedUseNavigate).toHaveBeenCalledWith('/login')
    })

    // describe('Redirect authenticated users', )
    it('Should redirect authenticated users to collections route', () => {

        // jest.mock('./hooks/redux/use-app-selector.hook.ts', () => ({
        //     state: {
        //         user: {
        //             userInfo: {
        //                 loading: false,
        //                 success: true,
        //                 userInfo: {
        //                     id: '1',
        //                     username: 'testUsername',
        //                     email: 'test@email.com',
        //                     roles: ['user']
        //                 }
        //             }
        //         }
        //     }
        // }))

        // renderComponent(<App />, {}, ['/'])

        // expect(mockedUseNavigate).toHaveBeenCalledWith('/collections')
    })

})