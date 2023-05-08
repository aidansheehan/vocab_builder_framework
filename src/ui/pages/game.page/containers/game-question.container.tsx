import { useContext, useEffect, useState }              from 'react'
import { useNavigate, useParams, useSearchParams }      from 'react-router-dom'
import MultipleChoiceQuestionComponent                  from '../../../games/multiple-choice/components/multiple-choice.question/multiple-choice.question.component'
import QuestionsContext                                 from '../../../games/context/questions.context'
import useGoToQuestion                                  from '../hooks/go-to-question.hook'
import { TransitionGroup, CSSTransition }               from 'react-transition-group'
import styles                                           from './game-question.component.scss'

/**
 * Container for a game question element, handles data fetching for game question
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <GameQuestionContainer />
 * )
 */
const GameQuestionContainer = (): JSX.Element => {

    const [ loaded, setLoaded ] = useState<boolean>(false)      //Loaded state
    const { questionNumber }    = useParams()                   //Current questionNumber
    const [ searchParams ]      = useSearchParams()             //Search params
    const { questions }         = useContext(QuestionsContext)  //Destructure questions context

    /**
     * TODO
     *  - for multiple games will need to know what game we are playing and choose question component appropriately
     */
    const goToQuestion  = useGoToQuestion()
    const navigate      = useNavigate()

    //Function to handle next question
    const nextQuestion = (quizLength: number) => {

        //If there are more questions
        if (parseInt(questionNumber) < quizLength) {

            //Go to next question
            goToQuestion(parseInt(questionNumber) + 1);
        }
        
        else {

            //Game finish path
            const gameFinishPath = `/user/collection/play/finish${searchParams ? '?' + searchParams.toString() : ''}`

            //Navigate to game finish
            navigate(gameFinishPath)

        }

    }

    //componentDidMount
    useEffect(() => {

        const question = questions[parseInt(questionNumber) - 1]  //Destructure questions context

        //If questions exists
        if (question) {

            const { answers } = question    //Destructure question

            //If answers exist
            if (answers && answers.length) {

                //Set loaded flag true
                setLoaded(true)

                //Return to allow game play
                return

            }
        }

        //Game start path
        const gameStartPath = `/user/collection/play${searchParams ? '?' + searchParams.toString() : ''}`

        //Navigate to game start
        navigate(gameStartPath)

    })

    return (
        <>
            {
                loaded
                ?
                <TransitionGroup component={null}>
                    <CSSTransition
                        key={questionNumber}
                        timeout={500}
                        classNames={{
                            enter: styles.entering,
                            enterActive: styles.entered,
                            exit: styles.exiting
                        }}
                    >
                        <div className={styles.questionWrapper} >
                            <MultipleChoiceQuestionComponent nextQuestion={nextQuestion} questionNumber={parseInt(questionNumber)} />
                        </div>
                        
                    </CSSTransition>
                </TransitionGroup>
                :
                <></>
            }
        </>
    )

}

export default GameQuestionContainer