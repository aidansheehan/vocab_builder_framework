import { Link } from "react-router-dom";
import styles   from './header.component.scss';

/**
 * Header component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <HeaderComponent />
 * )
 */
const HeaderComponent = () => {

    /**
     * ToDo
     *  - need to get mainRouter, authRouter arrays and loop through them
     *  - generate links appropriately
     */

    return (
            <div className={styles.header}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/collections/new">New Collection</Link>
                    </li>
                    <li>
                        <Link to="/collections/view/5">Example Collection 5</Link>
                    </li>
                    <li>
                        <Link to="/collections/edit/5">Example Collection Edit 5</Link>
                    </li>
                    <li>
                        <Link to="/play/5">Example Game Collection 5</Link>
                    </li>
                </ul>
            </div>
    )
}

export default HeaderComponent;