import { useContext, useEffect, useState }      from "react"
import { useNavigate }                          from "react-router-dom"
import QuestionsContext                         from "../../context/questions.context"
import MultipleChoiceQuestionComponent          from "../multiple-choice.question/multiple-choice.question.component"

/** MultipleChoiceQuestionPreloaderComponentProps */
type MultipleChoiceQuestionPreloaderComponentProps = {

    /** Question number */
    questionNumber: number,

    /** Function to go to the next question */
    nextQuestion: (quizLength: number) => void

}

/**
 * Preloader wrapper component to ensure data required for multiple choice question available before rendering
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let questionNumber = 1;
 * let nextQuestion = () => alert('next question function');
 * return (
 *   <MultipleChoiceQuestionPreloaderComponent />
 * )
 */
const MultipleChoiceQuestionPreloaderComponent = (props: MultipleChoiceQuestionPreloaderComponentProps): JSX.Element => {

    const [ loaded, setLoaded ]                 = useState<boolean>(false)      //Loaded state
    const { nextQuestion, questionNumber }      = props                         //Destructure props
    const { questions }                         = useContext(QuestionsContext)  //Destructure questions context

    const params = new URLSearchParams(window.location.search)
    const collectionId = params.get('collectionId')
    
    const navigate = useNavigate()

    useEffect(() => {

        const question = questions[questionNumber - 1]  //Destructure questions context
        
        //If question exists
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

        //Navigate to game start
        navigate(`/user/collection/play?collectionId=${collectionId}`)

    }, [])

    return (
        <>
            {
                loaded
                ?
                <MultipleChoiceQuestionComponent nextQuestion={nextQuestion} questionNumber={questionNumber} />
                :
                <div>
                    LOADING...
                </div>
            }
        </>
    )

}

export default MultipleChoiceQuestionPreloaderComponent