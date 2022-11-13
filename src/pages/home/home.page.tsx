import { useSelector } from 'react-redux'

/**
 * User Home Page Component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <HomePage />
 * )
 */
const HomePage = (): JSX.Element => {

    //Get user info
    //@ts-ignore
    const { userInfo } = useSelector((state) => state.user)

    //TODO get user collection data here (but think how to update if changes and how will be retrieved if user accesses specific page first - may need to call getCollectionById & getTranslationsByCollectionId in collection editor/view and game components too)

    return (
        <div>
            I am the home page.
            <figure>{userInfo?.username.charAt(0).toUpperCase()}</figure>

            <span>
                Welcome <strong>{userInfo?.username}!</strong> 
                You can view this because you're logged in.
            </span>
        </div>
    )
}

export default HomePage