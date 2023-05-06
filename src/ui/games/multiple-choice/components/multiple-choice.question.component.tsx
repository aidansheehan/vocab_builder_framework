import { useContext }   from 'react'
import QuestionsContext from '../context/questions.context'

/** MultipleChoiceQuestionComponentProps */
type MultipleChoiceQuestionComponentProps = {

    /** Function to go to the next question */
    nextQuestion: (quizLength: number) => void
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

    const { nextQuestion } = props  //Destructure props

    //Questions
    const { questions } = useContext(QuestionsContext)

    //Function to handle question answered
    const questionAnsweredHandler = () => nextQuestion(questions.length)

    return (
        <div>
            {/* TODO remove */}
            <button onClick={questionAnsweredHandler} >Next Question</button>
        </div>
    )
}

export default MultipleChoiceQuestionComponent