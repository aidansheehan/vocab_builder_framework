import classNames                                   from 'classnames'
import { useContext, useEffect, useRef, useState }  from 'react'
import GameCardComponent                            from '../../../../components/game-card/game-card.component'
import QuestionsContext                             from '../../../context/questions.context'
import MultipleChoiceAnswerComponent                from '../multiple-choice.answer/multiple-choice.answer.component'
import styles                                       from './multiple-choice.question.component.scss'

/** MultipleChoiceQuestionComponentProps */
type MultipleChoiceQuestionComponentProps = {

    /** Question number */
    questionNumber: number,

    /** Function to go to the next question */
    nextQuestion: (quizLength: number) => void
}

/** Answer state type TODO import */
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

    const [ answerState, setAnswerState ]               = useState<AnswerStateType[]>(answers.map(a_ => ({lexi: a_.lexi, currentState: 'unclicked'})))  //Init answers state
    const [ answeredCorrectly, setAnsweredCorrectly ]   = useState<boolean>(false)                                                                      //Answered correctly state
    const timeoutRef                                    = useRef<number>()                                                                              //Timeout reference

    //Destructure styles for animation time constants
    const { SECOND_ANIMATION_LENGTH } = styles

    //Monitor for changes to question number
    useEffect(() => {

        //Reset answer states
        setAnswerState(answers.map(a_ => ({ lexi: a_.lexi, currentState: 'unclicked' })))
        setAnsweredCorrectly(false)

    }, [ questionNumber ])

    //Function to handle question answered
    const questionAnsweredHandler = () => {

        //If timeout
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)    //clear timeout
        }

        //Navigate to next question
        nextQuestion(questions.length)
    }

    //Prompt className
    const promptClassName = classNames({ [styles.promptAnsweredCorrectly]: answeredCorrectly })

    return (
        <div className={styles.multipleChoiceGame}>
            
            {/* The prompt */}
            <GameCardComponent value={question.prompt} style={promptClassName} />

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
                                setAnsweredCorrectly(true)

                                //Navigate to next question after time
                                timeoutRef.current = window.setTimeout(() => {
                                    questionAnsweredHandler()
                                }, +SECOND_ANIMATION_LENGTH)
                            }

                            //If loss
                            else {

                                //Set answer incorrect
                                newAnswerState[i_].currentState = 'incorrect'

                                //Update state
                                setAnswerState(newAnswerState)
                            }
                        }

                        return <MultipleChoiceAnswerComponent clickHandler={handleClick} answer={a_} key={i_} />

                    })
                }
            </div>

        </div>
    )
}

export default MultipleChoiceQuestionComponent