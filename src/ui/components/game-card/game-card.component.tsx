import classNames               from 'classnames'
import { MouseEventHandler }    from 'react'
import MULTIPLE_CHOICE_ANIMATION_TIMER from '../../games/multiple-choice/constants/multiple-choice.animation-timer.constant'
import TextValueComponent       from '../text-value/text-value.component'
import styles                   from './game-card.component.scss'

/** GameCardComponentProps */
type GameCardComponentProps = {

    /** Value to display */
    value: string,

    /** Click handler */
    onClick?: MouseEventHandler<HTMLDivElement>,

    /** Current button state */
    currentState?: 'unclicked' | 'correct' | 'incorrect',

    /** Additional styles to be applied */
    style?: string

}

/**
 * Card component to display data in game
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let value = 'Ek'
 * return (
 *   <GameCardComponent value={value} />
 * )
 */
const GameCardComponent = (props: GameCardComponentProps): JSX.Element => {

    const { value, onClick, currentState, style } = props    //Destructure props

    //Component className
    const className = classNames(styles.gameCard, { [styles.gameCardDisplay]: !onClick, [styles.correct]: currentState === 'correct', [styles.incorrect]: currentState === 'incorrect' }, style)

    return (
        <div className={className} onClick={onClick} style={{transition: `all ${MULTIPLE_CHOICE_ANIMATION_TIMER}ms ease`}} >
            <TextValueComponent value={value} style={styles.gameCardText}/>
        </div>
    )

}

export default GameCardComponent