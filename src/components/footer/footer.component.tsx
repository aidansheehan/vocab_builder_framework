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
            I'm a footer.
        </div>
    )
}

export default FooterComponent