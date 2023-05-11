import { useEffect, useState }              from 'react'
import MultipleChoiceContainer              from '../../games/multiple-choice/multiple-choice.container'
import useGoToQuestion                      from './hooks/go-to-question.hook'
import styles                               from './game.page.scss'
import useAppDispatch                       from '../../hooks/redux/use-app-dispatch.hook'
import { gameInitialised, gameStarted }     from '../../../redux/slices/game.slice'
import useAppSelector                       from '../../hooks/redux/use-app-selector.hook'
import { setError }                         from '../../../redux/slices/error.slice'
import { useNavigate }                      from 'react-router-dom'

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

    //Loaded state
    const [ loaded, setLoaded ] = useState<boolean>(false)

    const params        = new URLSearchParams(window.location.search)   //Get url search params
    const collectionId  = params.get('collectionId')                    //Get collectionId

    //Get this collection
    const collection = useAppSelector(state => state.collections.collections[collectionId])

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //Custom hook to navigate to next question
    const goToQuestion = useGoToQuestion()

    //Function to start the game
    const startGame = () => {

        dispatch(gameStarted()) //Dispatch gameStarted
        goToQuestion(1)         //Navigate to first question
    }

    //ComponentDidMount
    useEffect(() => {

        //If collection doesn't exist
        if (!collection) {

            //Display error
            dispatch(setError('error-message_collection-not-found'))

            //Navigate to home
            navigate('/user')

        }

        //Collection found
        else {

            //Set loaded flag true
            setLoaded(true)
        }

        //Cleanup
        return () => {

            //Re-Initialise game when user navigates away
            dispatch(gameInitialised())
        }
    }, [])

    if (!loaded) return null

     return (
        <div className={styles.gamePage} >
            <MultipleChoiceContainer startGame={startGame} />
        </div>
     )
}

export default GamePage