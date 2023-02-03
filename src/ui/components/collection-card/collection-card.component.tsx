import { useNavigate }          from 'react-router-dom'
import ButtonComponent          from '../button/button.component'
import TextValueComponent       from '../text-value/text-value.component'
import styles                   from './collection-card.component.scss'

/** CollectionCardComponentProps type */
type CollectionCardComponentProps = {

    /** Collection ID */
    id: string,

    /** Collection Title */
    title: string,

    /** Collection Description */
    description: string

}

/**
 * 'Card' component to display a collection & description with links to edit and play
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <CollectionCardComponent />
 * )
 */
const CollectionCardComponent = (props: CollectionCardComponentProps): JSX.Element => {

    const { id, title, description } = props   //Destructure props

    const navigate = useNavigate()

    //Function to handle click to view and edit collection
    const handleViewClick = () => {
        navigate('collection' + `?collectionId=${id}`)
    }

    //Function to handle play click
    const handlePlayClick = () => {
        navigate('collection/play' + `?collectionId=${id}`)
    }

    return (
        <div className={styles.collectionCard} >

            <div className={styles.collectionCardTop}>

                <ButtonComponent style={styles.collectionCardViewBtn} onClick={handleViewClick} icon='pen-to-square' />

                <div className={styles.collectionCardDetails} >
                    <TextValueComponent value={title} style={styles.collectionCardTitle} />
                    <TextValueComponent value={description} style={styles.collectionCardDescription} />
                </div>

            </div>

            <div className={styles.collectionCardBottom} >
                <ButtonComponent onClick={handlePlayClick} textRef='collection_play_link' icon='play' primary />
            </div>

        </div>
    )
}

export default CollectionCardComponent