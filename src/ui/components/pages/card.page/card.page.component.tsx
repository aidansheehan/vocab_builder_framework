import useAppSelector from '../../../hooks/redux/use-app-selector.hook'
import CardFormComponent from '../../card-form/card-form.component'
import TextComponent from '../../text/text.component'
import styles from './card.page.component.scss'

/**
 * Page to create or edit a specific card
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *  <
 * )
 */
const CardPageComponent = (): JSX.Element => {


    const params        = new URLSearchParams(window.location.search)   //Get url search params
    const collectionId  = params.get('collectionId')                    //Get collection ID
    const cardId        = params.get('cardId')                          //Get card ID

    //TBD if no collection ID error
    if (!collectionId) {

    }

    //Find card if exists
    const card = cardId ? useAppSelector(state => state.collections.collections[collectionId].cards.find(c_ => c_.id == cardId)) : null

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

            <CardFormComponent collectionId={collectionId} card={card} />

        </div>
    )
    
}

export default CardPageComponent