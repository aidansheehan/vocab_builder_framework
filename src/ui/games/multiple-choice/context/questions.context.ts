import { createContext }                from 'react'
import { MultipleChoiceQuestionType }   from '../types/multiple-choice.question.type'

/** QuestionsContextType */
type QuestionsContextType = {

    /** Questions */
    questions: MultipleChoiceQuestionType[],

    /** Function to update questions */
    setQuestions: Function
}

/**
 * Context for exposing generated multiple choice questions to game
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const QuestionsContext = createContext<QuestionsContextType>({questions: [], setQuestions: () => {}})

export default QuestionsContext