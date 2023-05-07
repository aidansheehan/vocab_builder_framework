import classNames                           from 'classnames'
import { MouseEventHandler }                from "react"
import GameCardComponent                    from "../../../../components/game-card/game-card.component"
import { MultipleChoiceAnswerStateType }    from "../../types/multiple-choice.question.type"
import styles                               from './multiple-choice.answer.component.scss'

/** MultipleChoiceAnswerComponentProps */
type MultipleChoiceAnswerComponentProps = {

    /** The answer */
    answer: MultipleChoiceAnswerStateType,

    /** clickHandler */
    clickHandler: MouseEventHandler<HTMLDivElement>

}

/**
 * 'Answer' component for multiple choice quiz
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let answer = { lexi: 'ek', currentState: 'unclicked' }
 * return (
 *   <MultipleChoiceAnswerComponent answer={answer} />
 * )
 */
const MultipleChoiceAnswerComponent = (props: MultipleChoiceAnswerComponentProps): JSX.Element => {

    const { answer, clickHandler }  = props     //Destructure props
    const { lexi, currentState }    = answer    //Destructure answer

    //Component className
    const className = classNames(styles.multipleChoiceAnswer, {
        [styles.correct]: currentState === 'correct',
        [styles.incorrect]: currentState === 'incorrect'
    })

    return <GameCardComponent onClick={clickHandler} value={lexi} style={className} />


}

export default MultipleChoiceAnswerComponent