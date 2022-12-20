import { useEffect, useState }      from "react"
import Cookies                      from "universal-cookie"
import LocalizedAppComponent        from "./localized-app.component"
import { BrowserRouter }            from "react-router-dom"
import { LocaleContext }            from "../../context/locale.context"

import enMessages                           from '../../localization/en.json'
import hiMessages                           from '../../localization/hi.json'
import viMessages                           from '../../localization/vi.json'

//TODO: should pull in only required translations and update on change using react suspense to keep old texts until new JSON loaded
export const messages: { [index: string]: any } = {
    'en': enMessages,
    'hi': hiMessages,
    'vi': viMessages
}

/**
 * Container responsible for data fetching required to wrap app in IntlProvider and fetching/updating locale
 * @author Aidan Sheehan
 * @component
 * @exaple
 * return (
 *   <LocalizedAppContainer />
 * )
 */
const LocalizedAppContainer = (): JSX.Element => {

    const cookies               = new Cookies(document.cookie)                      //get cookies
    const [ locale, setLocale ] = useState<string>(cookies.get('lang') ?? 'en')     //set initial locale state and define function to set new locale

    //Monitor for changes to language and cookies and update routes accordingly
    useEffect(() => {
        cookies.set('lang', locale, { path: '/' })
    }, [ locale, cookies ])

    return (
        <BrowserRouter>
            <LocaleContext.Provider value={{locale, setLocale}} >
                <LocalizedAppComponent locale={locale} messages={messages[locale]} defaultLocale='en'  />
            </LocaleContext.Provider>
        </BrowserRouter>
    )

}

export default LocalizedAppContainer