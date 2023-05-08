import { useEffect, useState }      from 'react'
import MultipleChoiceContainer      from '../../games/multiple-choice/multiple-choice.container'
import useGoToQuestion              from './hooks/go-to-question.hook'
import styles                       from './game.page.scss'

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

    //Game started
    const [ gameStarted, setGameStarted ] = useState<boolean>(false)

    //Custom hook to navigate to next question
    const goToQuestion = useGoToQuestion()

    //Function to start the game
    const startGame = () => {
        setGameStarted(true)
    }

    //Monitor for changes to gameStarted state
    useEffect(() => {

        //If game started
        if (gameStarted) {

            //Go to first question
            goToQuestion(1)
        }

    }, [gameStarted] )

     return (
        <div className={styles.gamePage} >
            <MultipleChoiceContainer startGame={startGame} />
        </div>
     )
}

export default GamePage