import { useEffect, useMemo }               from 'react'
import { IntlProvider }                     from 'react-intl'
import Cookies                              from 'universal-cookie'
import App                                  from '../../app'
import enMessages                           from '../../localization/en.json'
import hiMessages                           from '../../localization/hi.json'
import viMessages                           from '../../localization/vi.json'

/**
 * Translations by language TODO should refactor with SUPPORTED_LANGUAGES constant for SST
 */
export const messages: { [index: string]: any } = {
    'en': enMessages,
    'hi': hiMessages,
    'vi': viMessages
}

/** LocalizedApp Props Type */
type LocalizedAppProps = {
    lang: string
}

/**
 * Component to wrap app in IntlProvider allowing every component to access necessary locale data
 * @author Aidan Sheehan <aidanmsheehan@gmaill.com>
 * @component
 * @example
 * let lang='en'
 * return (
 *   <LocalizedApp lang={lang} />
 * )
 */
const LocalizedApp = (props: LocalizedAppProps): JSX.Element => {

    const { lang }  = props                                             //Destructure props
    const cookies   = useMemo(() => new Cookies(document.cookie), [])   //Access cookies

    //Monitor for changes to language and cookies and update routes accordingly
    useEffect(() => {
        cookies.set('lang', lang, { path: '/' })
    }, [lang, cookies])

    return (
        <IntlProvider
            locale={lang}
            messages={messages[lang]}
            defaultLocale={'en'}
        >
            <App />
        </IntlProvider>
    )
}

export default LocalizedApp