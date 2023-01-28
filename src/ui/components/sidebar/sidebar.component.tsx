import classNames from 'classnames'
import styles from './sidebar.component.scss'

/** SidebarComponentProps */
type SidebarComponentProps = {

    /** Children to render */
    children: JSX.Element,

    /** Additional styles to be applied */
    style?: string

}

/**
 * Generic sidebar component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * children = <div></div>
 * return (
 *   <SidebarComponent children={children} />
 * )
 */
const SidebarComponent = (props: SidebarComponentProps): JSX.Element => {

    const { children, style } = props  //Destructure props

    const className = classNames(styles.sidebar, style)

    /**
     * TODO
     *  - atm component has display none if mobile or tablet-portrait
     *  - investigate if would be better to conditionally render using useDevice hook
     *  - implement transition styles so sidebar animates in / out from the left
     */

    return (
        <div className={className} >
            {children}
        </div>
    )
}

export default SidebarComponent