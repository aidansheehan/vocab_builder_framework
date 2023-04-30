import TextValueComponent                       from '../../text-value/text-value.component'
import useAppSelector                           from '../../../hooks/redux/use-app-selector.hook'
import { useLocation, useNavigate }             from 'react-router-dom'
import ButtonComponent                          from '../../button/button.component'
import styles                                   from './collection.page.component.scss'
import CollectionPageCardDisplayComponent       from './components/collection.page.card-display/collection.page.card-display.component'

/**
 * Collection Page for view, edit & link to play games with a collection
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *   <CollectionPageComponent />
 * )
 */
const CollectionPageComponent = (): JSX.Element => {

    const params        = new URLSearchParams(window.location.search)   //Get url search params
    const collectionId  = params.get('collectionId')                    //Get collectionId from params

    const navigate = useNavigate()
    const location = useLocation()

    if (!collectionId) {
        //TODO handle case no collection ID VBF-59
        console.error('no collection ID provided')
    }

    //Attempt to retrieve collection from redux store
    const collection = useAppSelector(state => state.collections.collections[collectionId])

    if (!collection) {
        //TODO handle case collection for this ID doesn't exist VBF-59
        console.error('this collection does not exist or does not belong to current user')
    }

    //Function to handle open card editor
    const openCardEditor = (cardId?: string) => {

        //If no ID provided create new card
        if (!cardId) {
            navigate(`/user/collection/card?collectionId=${collectionId}`, {state: {backgroundLocation: location}})
        }

        // If id provided edit existing card 
        else {
            navigate(`/user/collection/card?collectionId=${collectionId}&cardId=${cardId}`, {state: {backgroundLocation: location}})
        }
    }

    return (
        <>
            {
                collection
                ?
                <div className={styles.collectionDetails}>

                    <div className={styles.topPanel}>

                        <div className={styles.topPanelControl} >

                            <div className={styles.collectionInfo} >

                                <div className={styles.collectionInfoDetails}>

                                            <div className={styles.title} >
                                                <TextValueComponent value={collection.title} />
                                            </div>
                
                                            <div className={styles.description}>
                                                <TextValueComponent value={collection.description} />
                                            </div>
                                </div>

                                <div className={styles.collectionInfoButtons}>
                                            <ButtonComponent textRef='collection-details_nav_play' primary onClick={() => navigate('/user/collection/play' + `?collectionId=${collectionId}`)} />
                                            <ButtonComponent secondary icon='pen-to-square' onClick={() => navigate(`/user/collection/info?collectionId=${collectionId}`, {state: {backgroundLocation: location}})} />
                                </div>
            
                            </div>
                            
                        </div>
        
                    </div>

                    {
                        collection.cards.map(c_ => {

                            const { id } = c_   //Destructure card for ID

                            return (
                                <div className={styles.collectionPageSection} key={id} >
    
                                    <CollectionPageCardDisplayComponent collectionId={collectionId} card={c_} editHandler={() => openCardEditor(id)} />

                                </div>
                            )
                        })
                    }

                    {/* New Card Input */}
                    <div className={styles.collectionPageSection} >
                        <ButtonComponent onClick={() => openCardEditor()} textRef='collection-editor_new-word' style={styles.newCardBtn} />
                    </div>
        
                </div>
                :
                // TODO: replace with loader component VBF-58
                <div>LOADING...</div>
            }
        </>

    )
}

export default CollectionPageComponent