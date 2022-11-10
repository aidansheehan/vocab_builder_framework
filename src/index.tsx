//Core
import { createRoot }   from 'react-dom/client'
//Redux
import { Provider } from 'react-redux'
import store from './store'
//React Router
import { BrowserRouter } from "react-router-dom"
//Stylesheets TODO where should this be imported (would still prefer as global module)
import './global.scss'
import App from './app'

/**
 * Root entry point of the application
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * TODO document
 */

const root = createRoot(document.getElementById("root")!)
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    );