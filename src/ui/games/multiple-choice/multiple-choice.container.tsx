import { useEffect, useState }                          from 'react'
import { Outlet }                                       from 'react-router-dom'
import useAppSelector                                   from '../../hooks/redux/use-app-selector.hook'
import QuestionsContext                                 from '../context/questions.context'
import generateQuestions                                from './functions/multiple-choice.generate-questions.function'
import { MultipleChoiceQuestionType }                   from './types/multiple-choice.question.type'

/** MultipleChoiceContainerProps */
type MultipleChoiceContainerProps = {

    /** Function to start the game */
    startGame: () => void

}

/**
 * Container for multiple choice game
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <MultipleChoiceContainer />
 * )
 */
const MultipleChoiceContainer = (props: MultipleChoiceContainerProps): JSX.Element => {

    // Questions state
    const [ questions, setQuestions ] = useState<MultipleChoiceQuestionType[]>([])

    const { startGame } = props //Destructure props

    //Game in progress
    const { waitingToStart } = useAppSelector(state => state.game)

    const params        = new URLSearchParams(window.location.search)   //Get url search params
    const collectionId  = params.get('collectionId')                    //Get collectionId

    //Get this collection
    const collection = useAppSelector(state => state.collections.collections[collectionId])

    //Monitor changes to waitingToStart flag
    useEffect(() => {

        //If waitingToStart game
        if (waitingToStart) {

            //Generate questions
            setQuestions(generateQuestions(collection))

        }

    }, [ waitingToStart ])

    //Monitor changes to questions context
    useEffect(() => {

        //If questions defined
        if (questions.length > 0) {

            //Start the game
            startGame()
        }
        
    }, [ questions ])

    return (
        <QuestionsContext.Provider value={{questions, setQuestions}}>
            <Outlet />
        </QuestionsContext.Provider>
    )

}

export default MultipleChoiceContainer