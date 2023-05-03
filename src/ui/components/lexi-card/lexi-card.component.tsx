import { deleteCard }       from '../../../redux/actions/collections.actions'
import { CardType }         from '../../../redux/types/collections/collection.types'
import useAppDispatch       from '../../hooks/redux/use-app-dispatch.hook'
import ButtonComponent      from '../button/button.component'
import TextValueComponent   from '../text-value/text-value.component'
import styles               from './lexi-card.component.scss'

/** LexiCardComponentProps */
type LexiCardComponentProps = {

    /** Card data */
    card: CardType,

    /** Function to edit the data */
    editHandler: () => void,

    /** Collection ID */
    collectionId: string

}

/**
 * Card component to display a lexi
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let card = { lexi: 'ek', textPrompt: 'one', id: '231293189' };
 * let editHandler = () => alert('Edit card');
 * let collectionId = '9283491873';
 * return (
 *   <CardComponent card={card} textPrompt={textPrompt} collectionId={collectionId} />
 * )
 */
const LexiCardComponent = (props: LexiCardComponentProps): JSX.Element => {

    const { card, editHandler, collectionId }   = props     //Destructure props
    const { lexi, textPrompt, id: cardId }      = card      //Destructure card

    const dispatch = useAppDispatch()

    return (
        <div className={styles.lexiCard}>

            <TextValueComponent value={lexi} style={styles.lexi} />

            {/* TODO this will be list of all prompts */}
            <ul>
                <TextValueComponent value={textPrompt} />
            </ul>

            <div className={styles.lexiCardActions} >

                <ButtonComponent icon='trash' onClick={() => dispatch(deleteCard({collectionId, cardId}))} style={styles.btn} warning />

                <ButtonComponent icon='pen-to-square' onClick={editHandler} textRef='common_edit_tag' style={styles.btn} />

            </div>

        </div>
    )

}

export default LexiCardComponent