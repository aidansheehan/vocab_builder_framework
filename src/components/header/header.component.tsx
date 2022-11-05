import { Link } from "react-router-dom";
import styles   from './header.component.scss';

/**
 * Header component
 */
const HeaderComponent = () => {

    return (
            <div className={styles.header}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/my-collections">My Collections</Link>
                    </li>
                </ul>
            </div>
    )
}

export default HeaderComponent;