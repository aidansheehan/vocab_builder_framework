import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styles from './game-question.component.scss'

/** GameQuestionComponentProps */
type GameQuestionComponentProps = {

    /** Child component */
    children: JSX.Element,

    /** Loaded */
    loaded: boolean,

    /** animationKey */
    animationKey: string

}

/**
 * Component responsible for rendering and animating a game question
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let children = <div>Game Question</div>
 * return (
 *   <GameQuestionComponent children={children} />
 * )
 */
const GameQuestionComponent = (props: GameQuestionComponentProps): JSX.Element => {

    const { children, loaded, animationKey } = props
    
    return (
        <>
            {
                loaded
                ?
                <TransitionGroup component={null}>
                    <CSSTransition 
                        key={animationKey}
                        in={true}
                        timeout={500}
                        classNames={{
                            enter: styles.entering,
                            enterActive: styles.entered,
                            exit: styles.exiting
                        }}
                    >
                        <div className={styles.questionWrapper} >
                            {children}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                :
                <></>

            }
        </>

    )



}

export default GameQuestionComponent