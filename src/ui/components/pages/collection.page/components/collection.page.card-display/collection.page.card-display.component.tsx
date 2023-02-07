import classNames           from 'classnames'
import { CardType }         from '../../../../../../redux/collections/types/collections.types'
import TextValueComponent   from '../../../../text-value/text-value.component'
import styles               from './collection.page.card-display.component.scss'

/** CollectionDetailsCardDisplayComponentProps type */
type CollectionCardDisplayComponentProps = {

    /** The Card to be displayed */
    card: CardType

}

/**
 * Component to display a single collection card
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let card = { lexi: "Billi", description: "Cat" } 
 * return (
 *   <CollectionCardDisplayComponent card={card} />
 * )
 */
const CollectionCardDisplayComponent = (props: CollectionCardDisplayComponentProps): JSX.Element => {

    const { card }                  = props     //Destructure props
    const { lexi, description }     = card      //Destructure card

    return (
        <div className={styles.card} >

            <div className={classNames(styles.cardLexi, styles.cardText)} >
                <TextValueComponent value={lexi} />
            </div>

            {/* TODO this will need to be refactored to loop through an array of 'prompts' VBF-57 */}
            <div className={classNames(styles.cardDescription, styles.cardText)} >
                <TextValueComponent value={description} />
            </div>

        </div>
    )
}

export default CollectionCardDisplayComponent