import { useNavigate }          from 'react-router-dom'
import ButtonComponent          from '../button/button.component'
import PlayButtonComponent      from '../play-button/play-button.component'
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

    return (
        <div className={styles.collection} >

            <TextValueComponent value={title} style={styles.collectionTitle} />

            <TextValueComponent value={description} style={styles.collectionDescription} />

            <div className={styles.collectionActions} >

                <ButtonComponent secondary style={styles.editBtn} onClick={handleViewClick} textRef='collection_edit_link' icon='pen-to-square' />
                <PlayButtonComponent collectionId={id} />

            </div>

        </div>
    )

}

export default CollectionCardComponent