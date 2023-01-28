//Core
import { createRoot }       from 'react-dom/client'
//Redux
import store                from './redux/store'
import { Provider }         from 'react-redux'
//Providers
import I18nProvider from './ui/context/providers/i18n/i18n.provider'
//Components
import RouterComponent from './ui/components/router-component/router-component'
//Font Awesome
import FontAwesomeIcons from './ui/functions/fontawesome-icons.function'

/**
 * Root entry point of the application
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @component
 * @example
 * return (
 *   <App />
 * )
 */
const root = createRoot(document.getElementById("root")!)

root.render(
    <Provider store={store}>
        <I18nProvider>
            <RouterComponent />
        </I18nProvider>
    </Provider>
)

//Expose core icons across framework
FontAwesomeIcons()