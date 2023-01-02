import React from 'react'
import { render, screen } from '@testing-library/react'
import { IntlProvider } from 'react-intl'
import RootComponent from './root-component'
import { MemoryRouter, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import enMessages from '../../localization/en.json'

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

jest.mock('../preloader/preloader.component.tsx', () => () => {
    const { Outlet } = jest.requireActual('react-router-dom')
    return < Outlet />
})

jest.mock('../../pages/landing/landing.page.tsx', () => () => {
    return <div data-testid='landing-page' ></div>
})

jest.mock('../../pages/home/home.page.tsx', () => () => {
    return <div data-testid='home-page' ></div>
})

jest.mock('../../pages/create-collection/create-collection.page.tsx', () => () => {
    return <div data-testid='new-collection-page' ></div>
})

jest.mock('../../pages/collection-details/collection-details.page.tsx', () => () => {
    return <div data-testid='collection-details-page' ></div>
})

jest.mock('../../pages/collection-editor/collection-editor.page.tsx', () => () => {
    return <div data-testid='collection-edit-page' ></div>
})

describe('RootComponent', () => {

    test('RootComponent should exist', () => {

        let { container } = renderComponent(<RootComponent />)
        expect(container).toBeInTheDocument()

    })

    describe('RootComponent should contain base (auth and landing) routes', () => {

        test('landing (index) route', () => {

                renderComponent(<RootComponent />, {}, ['/'])
                expect(screen.getByTestId('landing-page')).toBeInTheDocument()

        })

        test('login route', () => {

            renderComponent(<RootComponent />, {}, ['/login'])
            expect(screen.getByTestId('login-page')).toBeInTheDocument()

        })

        test('register route', () => {

            renderComponent(<RootComponent />, {}, ['/register'])
            expect(screen.getByTestId('register-page')).toBeInTheDocument()
        })

    })

    describe('RootComponent should contain collection routes', () => {

        test('home (my collections) route', () => {

            renderComponent(<RootComponent />, {}, ['/collections'])
            expect(screen.getByTestId('home-page')).toBeInTheDocument()

        })

        test('new collection route', () => {

            renderComponent(<RootComponent />, {}, ['/collections/new'])
            expect(screen.getByTestId('new-collection-page')).toBeInTheDocument()

        })

        describe('RootComponent should contain collection specific routes', () => {

            test('collection details route', () => {

                renderComponent(<RootComponent />, {}, ['/collections/testId'])
                expect(screen.getByTestId('collection-details-page')).toBeInTheDocument()
            })
        })
    })
})