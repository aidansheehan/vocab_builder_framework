//Core
// import { useEffect } from 'react'
//Router
// import { useLocation, useNavigate } from 'react-router-dom'
//Redux
import useAppSelector from './hooks/redux/use-app-selector.hook'
//Components
import ErrorNotificationComponent from './components/error-notification/error-notification.component'
//Layouts
import SidebarLayout    from './layouts/sidebar/sidebar.layout'
import HeaderLayout     from './layouts/header/header.layout'
//Stylesheets
import './global.scss'
import useAppInitialization from './hooks/useAppInitialization'

/**
 * Main app component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @component
 * @example
 * return (
 *  <App />
 * )
*/
const App = () => {

    const { userInfo, loading: userLoading }    = useAppSelector(state => state.user)           //Get userInfo and user loading
    const { loading: collectionsLoading }       = useAppSelector(state => state.collections)    //Get apploading

    //Initialize app
    useAppInitialization()

    if (userLoading || collectionsLoading) {
        return (
            <div>
                LOADING...
            </div>
        )
    }

    return (
        <>
            {
                !!userInfo
                ?
                <SidebarLayout />
                :
                <HeaderLayout />
            }
            <ErrorNotificationComponent />
        </>
    )

}

export default App