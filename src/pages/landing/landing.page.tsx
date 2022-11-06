/** LandingPageProps */
type LandingPageProps = {

    /** Function to log user in */
    login: () => void
}

/**
 * Landing (!auth) Page
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *  <LandingPage />
 * )
 */
const LandingPage = (props: LandingPageProps) => {

    const { login } = props //destructure props

    return (
        <div>
            I am the Landing Page.
            <button onClick={login} >Log In</button>
        </div>
    )
}

export default LandingPage