//Core
import { StrictMode }       from 'react';
import { createRoot }       from 'react-dom/client'
//Router
import { BrowserRouter, Navigate, Route, Routes }    from 'react-router-dom';
//Redux
import store                from './redux/store';
import { Provider }         from 'react-redux'
//Localized app component for users current locale
import LocalizedApp from './components/localized-app/localized-app.component';
//Cookies
import Cookies from 'universal-cookie';
//Constants
import SUPPORTED_LANGUAGES from './localization/constants/supported-languages.constant';


/**
 * Root entry point of the application
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @component
 * @example
 * return (
 *   <App />
 * )
 */

const cookies   = new Cookies(document.cookie)  //get cookies
const lang      = cookies.get('lang') ?? 'en';  //get language cookie or default to english

const root = createRoot(document.getElementById("root")!)

root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    {SUPPORTED_LANGUAGES.map(v_ => (
                        <Route 
                            key={v_.code}
                            path={`/${v_.code.toLowerCase()}//*`}
                            element={<LocalizedApp lang={v_.code} />}
                        />
                    ))}
                    <Route path='/' element={<Navigate to={`/${lang.toLowerCase()}`} />} />
                    {/* <Route path='*' element={<Navigate to={`/${lang.toLowerCase()}/404`} />} /> */}
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
)