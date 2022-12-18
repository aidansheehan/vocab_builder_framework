import React, { useEffect, useMemo, useState } from "react"
import Cookies from "universal-cookie"

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

    const [ currentLocale, setCurrentLocale ] = useState<string>('en')  //TODO this should get current locale from context

    const cookies = useMemo(() => new Cookies(document.cookie), [])     //Access cookies

    //Supported Locales TODO should come from one constant or something SST
    const LOCALES = [
        {
            name: 'English',
            code: 'en'
        },
        {
            name: 'Vietnamese',
            code: 'vi'
        }
    ]

    //Handle user select new locale
    const localeChangeHandler = ((e_: React.ChangeEvent<HTMLSelectElement>) => {
        
        const { value } = e_.target //get selected value from event object
        setCurrentLocale(value)     //update locale with new selected value
    })

    //Function to update locale preferences in cookies
    const updateLocale = (l_: string) => {
        cookies.set('lang', l_)
    }

    //Monitor for user change selected locale and update
    useEffect(() => {
        updateLocale(currentLocale)
    }, [ currentLocale ])

    return (

        <select value={currentLocale} name='locale' onChange={(e_) => {console.log(typeof e_, e_); localeChangeHandler(e_);}} >
            {
                LOCALES.map((l_, i_) => (
                    <option key={i_} value={l_.code} >{l_.name}</option>
                ))
            }
        </select>
    )
}

export default LocaleSelectorComponent