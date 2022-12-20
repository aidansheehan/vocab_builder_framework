import { useContext }           from 'react'
import { LocaleContext }        from '../../context/locale.context'
import SUPPORTED_LANGUAGES      from '../../localization/constants/supported-languages.constant'

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
const LocaleSelectorComponent = (): JSX.Element => {

    //Get current locale and function to switch locale
    const { locale, setLocale } = useContext(LocaleContext)

    //Handle user select new locale
    const localeChangeHandler = ((e_: React.ChangeEvent<HTMLSelectElement>) => {
        
        const { value } = e_.target //get selected value from event object
        setLocale(value)     //update locale with new selected value
    })

    return (

        <select value={locale} name='locale' onChange={localeChangeHandler} >
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