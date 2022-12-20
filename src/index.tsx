//Core
import { StrictMode }       from 'react'
import { createRoot }       from 'react-dom/client'
//Redux
import store                from './redux/store'
import { Provider }         from 'react-redux'
//Localized app
import LocalizedAppComponent from './components/localized-app/localized-app.component'


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
    <StrictMode>
        <Provider store={store}>
            <LocalizedAppComponent />
        </Provider>
    </StrictMode>
)