import { render }       from '@testing-library/react'
import FooterComponent  from './footer.component'

describe('FooterComponent', () => {

    test('FooterComponent should exist', () => {

        let { container } = render(<FooterComponent />)
        expect(container).toBeInTheDocument()
    })
})