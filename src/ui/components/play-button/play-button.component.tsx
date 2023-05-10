import { useNavigate }  from 'react-router-dom'
import isPlayable       from '../../games/functions/is-playable.condition'
import useAppSelector   from '../../hooks/redux/use-app-selector.hook'
import ButtonComponent  from '../button/button.component'

/** PlayButtonComponentProps */
type PlayButtonComponentProps = {

    /** Collection ID */
    collectionId: string,

    /** Additional styles to be applied */
    style?: string
}

/**
 * Button component to 'play' a collection
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let collectionId = 89234
 * return (
 *   <PlayButton collectionId={collectionId} />
 * )
 */
const PlayButtonComponent = (props: PlayButtonComponentProps): JSX.Element => {

    const { collectionId, style }   = props                                                                     //Destructure props
    const collection                = useAppSelector(state => state.collections.collections[collectionId])      //Get collection

    const navigate = useNavigate()

    //Whether games disabled for this collection
    const disabled = !isPlayable(collection)

    //Function to handle play click
    const handlePlayClick = () => {
        navigate('/user/collection/play' + `?collectionId=${collectionId}`)
    }

    return <ButtonComponent primary onClick={handlePlayClick} textRef='collection_play_link' icon='play' style={style} disabled={disabled} />

}

export default PlayButtonComponent