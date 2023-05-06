import { useContext, useEffect, useState }  from 'react'
import GameCardComponent                    from '../../../components/game-card/game-card.component'
import MULTIPLE_CHOICE_ANIMATION_TIMER      from '../constants/multiple-choice.animation-timer.constant'
import QuestionsContext                     from '../context/questions.context'
import styles                               from './multiple-choice.question.component.scss'

/** MultipleChoiceQuestionComponentProps */
type MultipleChoiceQuestionComponentProps = {

    /** Question number */
    questionNumber: number,

    /** Function to go to the next question */
    nextQuestion: (quizLength: number) => void
}

/** Answer state type */
type AnswerStateType = {

    /** Lexi */
    lexi: string,

    /** State */
    currentState: 'unclicked' | 'correct' | 'incorrect'
}

/**
 * Single question component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <MultipleChoiceQuestionComponent />
 * )
 */
const MultipleChoiceQuestionComponent = (props: MultipleChoiceQuestionComponentProps): JSX.Element => {

    const { nextQuestion, questionNumber } = props  //Destructure props

    const { questions } = useContext(QuestionsContext)      //Destructure questions context
    const question      = questions[questionNumber - 1]     //Get this question
    const { answers }   = question                          //Destructure question

    //Init answers state
    const [ answerState, setAnswerState ] = useState<AnswerStateType[]>(answers.map(a_ => ({lexi: a_.lexi, currentState: 'unclicked'})))

    //Monitor for changes to question number
    useEffect(() => {

        //Reset answer states
        setAnswerState(answers.map(a_ => ({ lexi: a_.lexi, currentState: 'unclicked' })))
    }, [ questionNumber ])

    //Function to handle question answered
    const questionAnsweredHandler = () => nextQuestion(questions.length)

    return (
        <div className={styles.multipleChoiceGame}>
            
            {/* The prompt */}
            <GameCardComponent value={question.prompt} />

            <div className={styles.answersContainer} >
                {
                    answerState.map((a_, i_) => {

                        //Function to handle click
                        const handleClick = () => {

                            const newAnswerState = [...answerState]  //Copy answer state

                            //If win
                            if (answers[i_].id === question.id) {

                                //Set answer correct
                                newAnswerState[i_].currentState = 'correct'

                                //Update state
                                setAnswerState(newAnswerState)

                                //Navigate to next question after time
                                setTimeout(() => {
                                    questionAnsweredHandler()
                                }, MULTIPLE_CHOICE_ANIMATION_TIMER)
                            }

                            //If loss
                            else {

                                //Set answer incorrect
                                newAnswerState[i_].currentState = 'incorrect'

                                //Update state
                                setAnswerState(newAnswerState)
                            }
                        }

                        return <GameCardComponent onClick={handleClick} value={a_.lexi} key={i_} currentState={a_.currentState} />
                    })
                }
            </div>

        </div>
    )
}

export default MultipleChoiceQuestionComponent