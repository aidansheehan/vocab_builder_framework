import { Outlet, useNavigate }                                       from 'react-router-dom'
import { Transition }                                   from 'react-transition-group'
import ButtonComponent                                  from '../button/button.component'
import { MODAL_ANIMATION_TIMER }                        from './constants/modal.animation-timer.constant'
import { DEFAULT_MODAL_STYLE, MODAL_TRANSITION_STYLES } from './constants/modal.style.constant'
import styles                                           from './modal.component.scss'

/** ModalComponentProps type */
type ModalComponentProps = {

    /** Callback on modal close */
    onCloseCallback?: Function
}

/**
 * Generic modal component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <ModalComponent />
 * )
 */
const ModalComponent = (props: ModalComponentProps) => {

    const { onCloseCallback } = props   //Destructure props

    const navigate = useNavigate()

    //Function to handle close modal
    const handleClose = () => {

        // alert('I got closed')
        navigate(-1)
        onCloseCallback && onCloseCallback()    //Execute onCloseCallback if defined
    }

    return (
        <Transition in={true} timeout={MODAL_ANIMATION_TIMER} appear unmountOnExit >

            {(state) => (

                <div className={styles.modalOverlay} onClick={handleClose} style={{...DEFAULT_MODAL_STYLE, ...MODAL_TRANSITION_STYLES[state]}} >

                    <div className={styles.modal} onClick={(e_: React.SyntheticEvent<HTMLDivElement>) => e_.stopPropagation()}>

                        {/* TODO - looking at designs you kinda don't need modal header.. analyse need for this and ways to simplify */}
                        <div className={styles.modalHeader}>

                            <div className={styles.modalHeaderLeft}>
                                {/* TBD if needed or remove if not */}
                            </div>

                            <div className={styles.modalHeaderRight} >
                                <ButtonComponent onClick={handleClose} icon='times' style={styles.modalHeaderCloseBtn} />
                            </div>

                        </div>

                        <div className={styles.modalContent} >
                            <Outlet />
                        </div>

                    </div>

                </div>
            )}

        </Transition>
    )

}

export default ModalComponent