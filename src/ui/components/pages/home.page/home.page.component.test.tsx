import { render }           from '@testing-library/react'
import React                from 'react'
import HomePageComponent    from './home.page.component'
import store                from '../../../../redux/store'
import { Provider }         from 'react-redux'

describe('HomePage', () => {

    test('HomePage should exist', () => {

        let { container } = render(
            <Provider store={store}>
                <HomePageComponent />
            </Provider>
        )

        expect(container).toBeInTheDocument()
    })
})