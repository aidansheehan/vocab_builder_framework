import { useEffect }                        from 'react'
import MultipleChoiceContainer              from '../../games/multiple-choice/multiple-choice.container'
import useGoToQuestion                      from './hooks/go-to-question.hook'
import styles                               from './game.page.scss'
import useAppDispatch                       from '../../hooks/redux/use-app-dispatch.hook'
import { gameInitialised, gameStarted }     from '../../../redux/slices/game.slice'

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

    const dispatch = useAppDispatch()

    //Custom hook to navigate to next question
    const goToQuestion = useGoToQuestion()

    //Function to start the game
    const startGame = () => {

        dispatch(gameStarted()) //Dispatch gameStarted
        goToQuestion(1)         //Navigate to first question
    }

    //ComponentDidMount
    useEffect(() => {

        //Cleanup
        return () => {

            //Re-Initialise game when user navigates away
            dispatch(gameInitialised())
        }
    }, [])

     return (
        <div className={styles.gamePage} >
            <MultipleChoiceContainer startGame={startGame} />
        </div>
     )
}

export default GamePage