import { render } from "@testing-library/react"
import React from "react"
import LocalizedAppComponent from './localized-app.component'
import Cookies from "universal-cookie"

jest.mock('../../localization/en.json', () => {return {"test": "test"}}, { virtual: true })
jest.mock('../../localization/hi.json', () => {return {"test": "test"}}, { virtual: true })
jest.mock('../../localization/vi.json', () => {return {"test": "test"}}, { virtual: true })

jest.mock("universal-cookie", () => {
    const mCookie = {
        get: jest.fn()
    }

    return jest.fn(() => mCookie);
})

const cookies = new Cookies()

describe('LocalizedAppComponent', () => {

    //TBD when routing unit tests implemented

    test('LocalizedAppComponent should exist', () => {
        
        // (cookies.get as jest.Mocked<any>).mockReturnValueOnce({
        //     value: 'en'
        // })

        // let { container } = render(<LocalizedAppComponent lang='en' />)
        // expect(container).toBeInTheDocument()
    })

    describe('LocalizedAppComponent should monitor for changes to language and cookies and update routes accordingly', () => {

        test('Monitors and updates routes on language change', () => {

        })

        test('Monitors and updates routes on cookies change', () => {

        })
    })

    describe('LocalizedAppComponent should wrap App so app can implement i18n', () => {

        test('App component should have Intl context', () => {
            
        })
    })
})