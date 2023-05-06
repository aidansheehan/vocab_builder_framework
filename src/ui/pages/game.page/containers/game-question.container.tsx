import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import MultipleChoiceQuestionComponent from '../../../games/multiple-choice/components/multiple-choice.question.component'
import useGoToQuestion from '../hooks/go-to-question.hook'

/**
 * Container for a game question element
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <GameQuestionContainer />
 * )
 */
const GameQuestionContainer = (): JSX.Element => {

    const { questionNumber }    = useParams()           //Current questionNumber
    const [ searchParams ]      = useSearchParams()     //Search params

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
    
    
    return <MultipleChoiceQuestionComponent nextQuestion={nextQuestion} />

}

export default GameQuestionContainer