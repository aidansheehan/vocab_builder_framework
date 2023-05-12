import { createContext }                from 'react'
import { MultipleChoiceQuestionType }   from '../multiple-choice/types/multiple-choice.question.type'

/** QuestionsContextType */
type QuestionsContextType = {

    /** Questions */
    questions: MultipleChoiceQuestionType[],

    /** Function to update questions */
    setQuestions: Function
}

/**
 * Generic context for exposing generated questions to game
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 */
const QuestionsContext = createContext<QuestionsContextType>({questions: [], setQuestions: () => {}})

export default QuestionsContext