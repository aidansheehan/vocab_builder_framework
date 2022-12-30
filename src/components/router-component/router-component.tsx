import { BrowserRouter }    from 'react-router-dom'
import RootComponent        from '../root-component/root.component'

/**
 * Component for intiialising router
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <RouterComponent />
 * )
 */
const RouterComponent = () => {

    return (

        <BrowserRouter>
            <RootComponent />
        </BrowserRouter>
    )
}

export default RouterComponent