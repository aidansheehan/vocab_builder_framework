import React from "react";
import { Link } from "react-router-dom";
//@ts-ignore
// import styles from './header.component.scss';
import './header.component.scss';

/**
 * Header component
 */
const HeaderComponent = () => {

    return (
        <div className="header">
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