import { createContext } from "react";

/** LocaleContextType */
type LocaleContextType = {

    /** Locale */
    locale: string,

    /** Function to update locale */
    setLocale: Function
}

/**
 * Context for exposing locale across UI
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const LocaleContext = createContext<LocaleContextType>({locale: 'en', setLocale: () => {}})

export default LocaleContext