import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

/**
 * Test page used for auth development TODO delete and implement methods on other protected routes
 */

const ProfilePage = () => {

    //@ts-ignore
    const { user: currentUser } = useSelector((state) => state.auth);

    if (!currentUser) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            <h1>{currentUser.username} Profile</h1>

            <p>
                Token: {currentUser.accessToken.substring(0,20)} ...{" "}
                {currentUser.accessToken.substr(currentUser.accessToken.length - 20)} {/* TODO idk what this is for */}
            </p>

            <p>
                Id: {currentUser.id}
            </p>

            <p>
                Email: {currentUser.email}
            </p>

            <h2>Authorities:</h2>
            <ul>
                {currentUser.roles &&
                    //@ts-ignore
                    currentUser.roles.map((role, index) => <li key={index} >{role}</li>)}
            </ul>
        </div>
    )
}

export default ProfilePage;