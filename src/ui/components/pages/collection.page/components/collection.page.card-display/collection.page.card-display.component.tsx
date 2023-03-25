import classNames                           from 'classnames'
import TextValueComponent                   from '../../../../text-value/text-value.component'
import ButtonComponent                      from '../../../../button/button.component'
import useAppDispatch                       from '../../../../../hooks/redux/use-app-dispatch.hook'
import { deleteCard }                       from '../../../../../../redux/actions/collections.actions'
import { CardType }                         from '../../../../../../redux/types/collections/collection.types'
import styles                               from './collection.page.card-display.component.scss'

/** CollectionPageCardDisplayComponentProps type */
type CollectionPageCardDisplayComponentProps = {

    //Card data
    card: CardType
    
    //Function to begin editing the data
    editHandler: () => void,

    //Collection Id
    collectionId: string

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

    const { card, editHandler, collectionId }       = props //Destructure props
    const { lexi, textPrompt, id: cardId }         = card  //Destructure card

    const dispatch = useAppDispatch()

    return (
        <div className={styles.cardDisplay}>

            <div className={styles.cardDisplayData} >
                <div className={classNames(styles.cardLexi, styles.cardText)} >
                    <TextValueComponent value={lexi} />
                </div>

                <div className={classNames(styles.cardTextPrompt, styles.cardText)} >
                    <TextValueComponent value={textPrompt} />
                </div>
            </div>

            <div className={styles.buttonSection} >
                <ButtonComponent icon='trash' onClick={() => dispatch(deleteCard({collectionId, cardId}))} textRef='common_delete_tag' style={styles.cardDisplayBtn} />
                <ButtonComponent icon='pen-to-square' onClick={editHandler} textRef='common_edit_tag' style={styles.cardDisplayBtn} />
            </div>

        </div>
    )
}

export default CollectionPageCardDisplayComponent