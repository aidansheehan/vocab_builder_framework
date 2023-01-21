import styles           from './menu-btn.component.scss'
import classNames       from 'classnames'
import ButtonComponent  from '../../../button/button.component'

/** MenuBtnComponentProps type */
type MenuBtnComponentProps = {

    /** Whether menu expanded */
    expanded: boolean,

    /** on click handler */
    handleClick: () => void

}

/**
 * Animated burget menu button element
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <MenuBtnComponent />
 * )
 */
const MenuBtnComponent = (props: MenuBtnComponentProps): JSX.Element => {

    const { expanded, handleClick } = props

    //Component classes
    const className = classNames(styles.menuBtn, {
        [styles.open]: expanded
    })

    return (
        <ButtonComponent 
            onClick={handleClick}
            style={className}
            children={<div className={styles.hamburger} ></div>}
        />
    )

}

export default MenuBtnComponent