//Core
import { StrictMode }       from 'react';
import { createRoot }       from 'react-dom/client'
//Router
import { BrowserRouter }    from 'react-router-dom';
//Redux
import store                from './redux/store';
import { Provider }         from 'react-redux'
//App
import App                  from './app';

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