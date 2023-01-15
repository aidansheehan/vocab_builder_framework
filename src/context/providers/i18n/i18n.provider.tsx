import { useEffect, useState }  from 'react'
import { IntlProvider }         from 'react-intl'
import Cookies                  from 'universal-cookie'
import LocaleContext            from '../../locale.context'

import enMessages from '../../../i18n/en.json'
import viMessages from '../../../i18n/vi.json'

//TODO: should pull in only required translations and update on change using react suspense to keep old texts until new JSON loaded
export const messages: { [index: string]: any } = {
    'en': enMessages,
    'vi': viMessages
}

/** I18nProviderPropsType */
type I18nProviderPropsType = {

    /** Child element to render */
    children: JSX.Element

}

/**
 * Provides full i18n context with current locale and react-intl
 * @param {JSX.Element} children child element to render
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * const children = <div></div>
 * return (
 *   <I18nProvider children={children} />
 * )
 */
const I18nProvider = (props: I18nProviderPropsType) => {

    const { children } = props

    const cookies = new Cookies(document.cookie)                                    //Get cookies
    const [ locale, setLocale ] = useState<string>(cookies.get('lang') ?? 'en')     //set initial locale state and define function to set new locale

    //Monitor for changes to language and cookies and update cookies for all routes accordingly
    useEffect(() => {
        cookies.set('lang', locale, { path: '/' })
    })

    return (
        <LocaleContext.Provider value={{locale, setLocale}}>
            <IntlProvider locale={locale} messages={messages[locale]} defaultLocale={'en'} >
                {children}
            </IntlProvider>
        </LocaleContext.Provider>
    )
}

export default I18nProvider