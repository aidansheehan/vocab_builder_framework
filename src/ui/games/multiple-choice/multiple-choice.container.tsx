import { useEffect, useState }                          from 'react'
import { Outlet }                                       from 'react-router-dom'
import useAppSelector                                   from '../../hooks/redux/use-app-selector.hook'
import QuestionsContext                                 from './context/questions.context'
import generateQuestions                                from './functions/multiple-choice.generate-questions.function'
import { MultipleChoiceQuestionType }                   from './types/multiple-choice.question.type'

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
const MultipleChoiceContainer = (): JSX.Element => {

    // Questions state
    const [ questions, setQuestions ] = useState<MultipleChoiceQuestionType[]>([])

    const params        = new URLSearchParams(window.location.search)   //Get url search params
    const collectionId  = params.get('collectionId')                    //Get collectionId

    //Get this collection
    const collection = useAppSelector(state => state.collections.collections[collectionId])

    useEffect(() => {

        //Generate questions
        setQuestions(generateQuestions(collection))

    }, [ collectionId ])




    return (
        <QuestionsContext.Provider value={{questions, setQuestions}}>
            <Outlet />
        </QuestionsContext.Provider>
    )

}

export default MultipleChoiceContainer