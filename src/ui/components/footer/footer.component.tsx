import styles from './footer.component.scss'

/**
 * Footer Component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <FooterComponent />
 * )
 */
const FooterComponent = () => {

    return (
        <div className={styles.footer} >
            <span>© Aidan Sheehan 2023</span>
        </div>
    )
}

export default FooterComponent