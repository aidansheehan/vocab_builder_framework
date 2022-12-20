import { useEffect, useState }      from "react"
import Cookies                      from "universal-cookie"
import { LocaleContext }            from "../../context/locale.context"
import { IntlProvider }             from "react-intl"
import App                          from '../../app'

import enMessages   from '../../localization/en.json'
import hiMessages   from '../../localization/hi.json'
import viMessages   from '../../localization/vi.json'
import { BrowserRouter } from "react-router-dom"

//TODO: should pull in only required translations and update on change using react suspense to keep old texts until new JSON loaded
export const messages: { [index: string]: any } = {
    'en': enMessages,
    'hi': hiMessages,
    'vi': viMessages
}

/**
 * Component responsible for data fetching required to wrap app in IntlProvider, fetching/updating locale and wrapping app in IntlProvider 
 * allowing every component to access necessary locale data
 * @author Aidan Sheehan
 * @component
 * @exaple
 * return (
 *   <LocalizedAppComponent />
 * )
 */
const LocalizedAppComponent = (): JSX.Element => {

    const cookies               = new Cookies(document.cookie)                      //get cookies
    const [ locale, setLocale ] = useState<string>(cookies.get('lang') ?? 'en')     //set initial locale state and define function to set new locale

    //Monitor for changes to language and cookies and update routes accordingly
    useEffect(() => {
        cookies.set('lang', locale, { path: '/' })
    }, [ locale, cookies ])

    return (
            <LocaleContext.Provider value={{locale, setLocale}} >
                <IntlProvider
                locale={locale}
                messages={messages[locale]}
                defaultLocale={'en'} >
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </IntlProvider>

            </LocaleContext.Provider>
    )

}

export default LocalizedAppComponent