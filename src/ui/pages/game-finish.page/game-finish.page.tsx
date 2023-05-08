import { useNavigate, useSearchParams } from 'react-router-dom'
import ButtonComponent from '../../components/button/button.component'
import TextComponent from '../../components/text/text.component'
import styles from './game-finish.page.scss'

/**
 * Game finish page
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * returns (
 *   <GameFinishPage />
 * )
 */
const GameFinishPage = (): JSX.Element => {

    const randFinishMessage = Math.floor(Math.random() * 10) + 1

    const navigate          = useNavigate()
    const [ searchParams ]  = useSearchParams()

    const gameStartPath = `/user/collection/play${searchParams ? '?' + searchParams.toString() : ''}`

    return (
        <div className={styles.gameFinishPage} >

            <div className={styles.gameFinishContent} >

                <TextComponent title textRef={`game-finish_message_${randFinishMessage}`} style={styles.gameFinishMessage} />

                <div className={styles.gameFinishControl} >

                    <ButtonComponent primary textRef='game-finish_play-again' onClick={() => navigate(gameStartPath)} icon='rotate-left' />
                    <ButtonComponent secondary textRef='nav_home_link' onClick={() => navigate('/user')} icon='house' />

                </div>
                

            </div>

        </div>
    )
}

export default GameFinishPage