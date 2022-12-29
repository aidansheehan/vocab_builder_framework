import { createRoot }       from 'react-dom/client'
//Redux
import store                from './redux/store'
import { Provider }         from 'react-redux'
//Providers
import I18nProvider from './context/providers/i18n/i18n.provider'
//Components
import PreloaderComponent from './components/preloader/preloader.component'


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
                <PreloaderComponent />
            </I18nProvider>
        </Provider>
)