//Core
import { StrictMode } from 'react';
import { createRoot }   from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import store from './redux/store';
import { Provider } from 'react-redux'

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
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>
)