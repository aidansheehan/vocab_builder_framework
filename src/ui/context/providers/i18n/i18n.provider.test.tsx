import I18nProvider from './i18n.provider'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { FormattedMessage } from 'react-intl'

describe('I18nProvider', () => {

    test('I18nProvider should exist', () => {

        let { container } = render(<I18nProvider><span>foo</span></I18nProvider>)
        expect(container).toBeInTheDocument()
        
    })

    test('I18nProvider should render child components', () => {

        render(<I18nProvider><span>foo</span></I18nProvider>)
        expect(screen.getByText('foo')).toBeInTheDocument()
    })

    describe('I18nProvider should allow child components to access i18n functionality', () => {

        test('Child components can access locale property', () => {
            
            //TBD
        })

        test('Child components can access messages', () => {

            //TBD

        })
    })
})