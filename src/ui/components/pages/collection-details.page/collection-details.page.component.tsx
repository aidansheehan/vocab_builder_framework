import CollectionDetailsCardDisplayComponent    from './components/collection-details.page.card-display/collection-details.page.card-display.component'
import styles                                   from './collection-details.page.component.scss'
import TextValueComponent                       from '../../text-value/text-value.component'
import useAppSelector                           from '../../../hooks/redux/use-app-selector.hook'
import { useNavigate }                          from 'react-router-dom'
import ButtonComponent                          from '../../button/button.component'

/**
 * Collection Details Page
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *   <CollectionDetailsPageComponent />
 * )
 */
const CollectionDetailsPageComponent = (): JSX.Element => {

    const params        = new URLSearchParams(window.location.search)   //Get url search params
    const collectionId  = params.get('collectionId')                    //Get collectionId from params

    const navigate = useNavigate()

    if (!collectionId) {
        //TODO handle case no collection ID VBF-59
        console.error('no collection ID provided')
    }


    //Attempt to retrieve collection from redux store
    const collection = useAppSelector(state => state.collections.collections[collectionId])

    if (!collection) {
        //TODO handle case collection for this ID doesn't exist
        console.error('this collection does not exist or does not belong to current user')
    }

    return (
        <>
            {
                collection
                ?
                <div className={styles.collectionDetails}>

                    <div className={styles.topPanel}>
        
                        <div className={styles.collectionInfo} >
        
                            <div className={styles.title} >
                                <TextValueComponent value={collection.title} />
                            </div>
        
                            <div className={styles.description}>
                                <TextValueComponent value={collection.description} />
                            </div>
        
                        </div>

                        <ButtonComponent textRef='collection-details_nav_play' primary onClick={() => navigate('/user/collection/play' + `?collectionId=${collectionId}`)} />
        
                    </div>
        
                    {
                        collection.cards.map((c_, i_) => (
                            <CollectionDetailsCardDisplayComponent card={c_} key={i_} />
                        ))
                    }
        
                </div>
                :
                // TODO: replace with loader component VBF-58
                <div>LOADING...</div>
            }
        </>

    )
}

export default CollectionDetailsPageComponent