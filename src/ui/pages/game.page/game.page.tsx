import { useEffect}                 from 'react'
import MultipleChoiceContainer      from '../../games/multiple-choice/multiple-choice.container'
import useGoToQuestion              from './hooks/go-to-question.hook'

/**
 * Game page
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *   <GamePage />
 * )
 */
const GamePage = (): JSX.Element => {

    //Custom hook to navigate to next question
    const goToQuestion = useGoToQuestion()
    
    //Navigate to first question on component mount
    useEffect(() => {
        goToQuestion(1)
    }, [])

     return (
         <MultipleChoiceContainer />
     )
}

export default GamePage