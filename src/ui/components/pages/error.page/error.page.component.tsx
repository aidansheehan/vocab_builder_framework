import { useRouteError } from 'react-router-dom'

/**
 * Bespoke Routing Error Page
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *  <ErrorPageComponent />
 * )
 */
const ErrorPageComponent = (): JSX.Element => {

    //TODO type
    const error = useRouteError() as any


    console.error(error)

    return (
        <div id='error-page' data-testid='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has ocurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPageComponent