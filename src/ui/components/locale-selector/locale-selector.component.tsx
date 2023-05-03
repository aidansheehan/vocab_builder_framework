import { useContext, useEffect, useRef, useState }      from 'react'
import LocaleContext                                    from '../../context/locale.context'
import SUPPORTED_LANGUAGES                              from '../../../i18n/constants/supported-languages.constant'
import classNames                                       from 'classnames'
import styles                                           from './locale-selector.component.scss'
import TextComponent                                    from '../text/text.component'

/** LocaleSelectorComponentProps type */
type LocaleSelectorProps = {

    /** Additional styles to be applied */
    style?: string

    /** Whether to render the options as a dropdown list */
    dropdown?: boolean

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

    const { locale, setLocale }     = useContext(LocaleContext)     //Get current locale and function to switch locale
    const { style, dropdown }       = props                         //Destructure props
    const [ isOpen, setIsOpen ]     = useState<boolean>(dropdown ? false : true)      //Whether menu open
    const timeoutRef                = useRef<number>()              //Timeout reference             

    //Handle mouse enter
    const handleMouseEnter = () => {
        setIsOpen(true)
    }

    //Handle mouse leave
    const handleMouseLeave = () => {
        timeoutRef.current = window.setTimeout(() => {
            setIsOpen(false)
        }, 100)
    }

    const handleOptionMouseEnter = () => {
        clearTimeout(timeoutRef.current)
    }

    //Handle user select new locale
    const localeChangeHandler = ((e_: React.ChangeEvent<HTMLSelectElement>) => {
        
        const { value } = e_.target //get selected value from event object
        setLocale(value)            //update locale with new selected value
    })

    //Close the timer when the component unmounts
    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [])

    const className = classNames(styles.localeSelector, style)

    return (
 
                <div className={className} onMouseEnter={dropdown ? handleMouseEnter : () => {}} onMouseLeave={dropdown ? handleMouseLeave : () => {}}>

                    <TextComponent textRef='locale-selector-tag' style={styles.localeSelectorTag} />:

                    <select className={classNames(styles.localeSelectorSelect, {[styles.hidden]: !dropdown})} value={locale} name='locale' onChange={localeChangeHandler}>
                        {
                            SUPPORTED_LANGUAGES.map((l_, i_) => (
                                <option key={i_} value={l_.code}>{l_.name}</option>
                            ))
                        }
                    </select>
                    <ul className={classNames(styles.localeSelectOptions, {[styles.open]: isOpen, [styles.dropdown]: dropdown, [styles.list]: !dropdown})} onMouseEnter={handleOptionMouseEnter} >
                            {
                                SUPPORTED_LANGUAGES.map((l_, i_) => (
                                    <li key={i_} onClick={() => setLocale(l_.code)} className={classNames(styles.localeSelectOption, {[styles.selected]: l_.code === locale })}>
                                        {dropdown ? l_.flag : null}
                                        {l_.name}
                                    </li>
                                ))
                            }
                        </ul>
                </div>

    )

}

export default LocaleSelectorComponent