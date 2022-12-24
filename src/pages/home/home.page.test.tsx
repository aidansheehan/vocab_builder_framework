import { render } from '@testing-library/react'
import React from 'react'
import HomePage from './home.page'
import store from '../../redux/store'
import { Provider } from 'react-redux'

describe('HomePage', () => {

    test('HomePage should exist', () => {

        let { container } = render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        )

        expect(container).toBeInTheDocument()
    })
})