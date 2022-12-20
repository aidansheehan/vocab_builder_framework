import { IntlProvider, MessageFormatElement }       from 'react-intl'
import App                                          from '../../app'

/** LocalizedAppComponentPropsType */
type LocalizedAppComponentPropsType = {

    /** Current locale */
    locale: string,

    /** Translated Messages */
    messages: Record<string, string> | Record<string, MessageFormatElement[]>,

    /** defaultLocale */
    defaultLocale: string
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
const LocalizedAppComponent = (props: LocalizedAppComponentPropsType): JSX.Element => {

    const { locale, messages, defaultLocale } = props   //destructure props

    return (
        <IntlProvider
        locale={locale}
        messages={messages}
        defaultLocale={defaultLocale}
        >
            <App />
        </IntlProvider>
    )
}

export default LocalizedAppComponent