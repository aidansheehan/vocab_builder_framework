import { render, screen }           from "@testing-library/react"
import HeaderComponent              from "./header.component"
import { MemoryRouter }             from "react-router-dom"
import React                        from "react"
import { Provider }                 from 'react-redux'
import store                        from '../../redux/store'
import userEvent                    from '@testing-library/user-event'

/**
 * Header component should:
 * 
 *  - test that the header links pass correct routes to mock navigate() 
 * function that does nothing
 * 
 *  - test that the correct links are generated for
 *     auth route
 *     !auth route
 *          
 *          (..so you will have to mock authentication)
 */

jest.mock('axios', () => {
    return {
        defaults: {
            headers: {
                common: {
                    Authorization: ""
                }
            }
        }
    }
})

const renderHeader = () => {

    return render(
        <Provider store={store}>
            <HeaderComponent />
        </Provider>
    )
}

describe('HeaderComponent', () => {

    test('HeaderComponent should exist', () => {

        const { container } = renderHeader()

        expect(container).toBeInTheDocument()
    })

    //Mock NavLinkComponent? or think about how a user would progress through this

    // test('HeaderComponent should ')
    describe('HeaderComponent should generate appropriate links if user unauthenticated', () => {

        test('navigate to login', () => {
            // render()
        })

        test('navigate to register', () => {
            
        })

        test('navigate to landing page', () => {
            
        })

        test('no other navigations', () => {

        })
    })

    describe('HeaderComponent should generate appropriate links if user authenticated', () => {

        /**
         * TBD will need to mock authentication
         */

        test('navigate to collections', () => {

        })

        test('user can logout', () => {

            //TBD mock logout function and check this can be called from header
        })
    })

})