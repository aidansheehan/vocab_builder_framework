import { CardType } from '../../../../redux/collections/types/collections.types'
import useAppSelector from '../../../hooks/redux/use-app-selector.hook'
import CardFormComponent from '../../card-form/card-form.component'
import TextComponent from '../../text/text.component'
import styles from './card.page.component.scss'

/** CardPageComponentProps */
type CardPageComponentProps = {

    /** Whether is a modal */
    isModal?: boolean

}

/**
 * Page to create or edit a specific card
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *  <
 * )
 */
const CardPageComponent = (props: CardPageComponentProps): JSX.Element => {

    const { isModal } = props


    const params        = new URLSearchParams(window.location.search)   //Get url search params
    const collectionId  = params.get('collectionId')                    //Get collection ID
    const cardId        = params.get('cardId')                          //Get card ID

    //TBD if no collection ID error
    if (!collectionId) {

    }

    //Find collection if exists and card ID provided
    const collection = cardId ? useAppSelector(state => state.collections.collections[collectionId]) : null

    //Init card variable
    let card: CardType

    //If collection retrieved
    if (collection) {
        card = collection.cards.find(c_ => c_.id == cardId) //Set card to card with matching id in collection
    }

    return (
        <div className={styles.cardPage}>

            <div className={styles.cardPageTitle}>
                {
                    cardId
                    ?
                    <TextComponent textRef='card-page_edit_title' />
                    :
                    <TextComponent textRef='card-page_new_title' />
                }
            </div>

            <CardFormComponent collectionId={collectionId} card={card} showBackToCollectionBtn={!isModal} />

        </div>
    )
    
}

export default CardPageComponent