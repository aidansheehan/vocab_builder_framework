import { render }               from "@testing-library/react"
import HeaderComponent          from "./header.component"
import { Router }               from "react-router-dom"

//TODO how to test router components

describe('HeaderComponent', () => {

    test('HeaderComponent should exist', () => {

        const history = createMemoryHistory()

        let { container } = render(
            <Router history={history} >
                <HeaderComponent />
            </Router>
            )
        expect(container).toBeInTheDocument()
    })
})