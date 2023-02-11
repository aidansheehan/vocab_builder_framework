import { CollectionPageCardComponentProps } from '../../types/collection.page.card.component.props'
import styles from './collection.page.card-display.component.scss'
import classNames from 'classnames'
import TextValueComponent from '../../../../../../text-value/text-value.component'
import ButtonComponent from '../../../../../../button/button.component'

/** CollectionPageCardDisplayComponentProps type */
type CollectionPageCardDisplayComponentProps = CollectionPageCardComponentProps & {
    
    //Function to begin editing the data
    editHandler: () => void

}

/**
 * Component to display a single card collection data
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let card = { lexi: "Billi", description: "Cat" };
 * let editHandler = () => console.log('edit handler function executed');
 * return (
 *   <CollectionPageCardDisplayComponent card={card} editHandler={editHandler} />
 * )
 */
const CollectionPageCardDisplayComponent = (props: CollectionPageCardDisplayComponentProps): JSX.Element => {

    const { card, editHandler }     = props //Destructure props
    const { lexi, description }     = card  //Destructure card

    return (
        <div className={styles.cardDisplay}>
            <div className={classNames(styles.cardLexi, styles.cardText)} >
                <TextValueComponent value={lexi} />
            </div>

            <div className={classNames(styles.cardDescription, styles.cardText)} >
                <TextValueComponent value={description} />
            </div>

            <div className={styles.buttonSection} >
                <ButtonComponent icon='trash' onClick={() => alert('delete card TBD')} textRef='common_delete_tag' style={styles.cardDisplayBtn} />
                <ButtonComponent icon='pen-to-square' onClick={editHandler} textRef='common_edit_tag' style={styles.cardDisplayBtn} />
            </div>

        </div>
    )
}

export default CollectionPageCardDisplayComponent