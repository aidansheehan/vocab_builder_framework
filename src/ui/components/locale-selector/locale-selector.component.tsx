import { useContext }           from 'react'
import LocaleContext            from '../../../context/locale.context'
import SUPPORTED_LANGUAGES      from '../../../i18n/constants/supported-languages.constant'
import classNames               from 'classnames'
import styles                   from './locale-selector.component.scss'

/** LocaleSelectorComponentProps type */
type LocaleSelectorProps = {

    /** Additional styles to be applied */
    style?: string

}

/**
 * Locale selector component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <LocaleSelectorComponent />
 * )
 */
const LocaleSelectorComponent = (props: LocaleSelectorProps): JSX.Element => {

    //Get current locale and function to switch locale
    const { locale, setLocale } = useContext(LocaleContext)

    const { style } = props //Destructure props

    //Handle user select new locale
    const localeChangeHandler = ((e_: React.ChangeEvent<HTMLSelectElement>) => {
        
        const { value } = e_.target //get selected value from event object
        setLocale(value)            //update locale with new selected value
    })

    const className = classNames(styles.localeSelector, style)

    return (

        <select className={className} value={locale} name='locale' onChange={localeChangeHandler} >
            {
                SUPPORTED_LANGUAGES.map((l_, i_) => (
                    <option key={i_} value={l_.code}>
                        {l_.name}
                    </option>
                ))
            }

        </select>

    )
}

export default LocaleSelectorComponent