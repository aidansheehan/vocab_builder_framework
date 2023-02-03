import CollectionDetailsCardDisplayComponent    from './components/collection-details.page.card-display/collection-details.page.card-display.component'
import styles                                   from './collection-details.page.component.scss'
import TextValueComponent                       from '../../text-value/text-value.component'
import useAppSelector                           from '../../../hooks/redux/use-app-selector.hook'
import useAppDispatch                           from '../../../hooks/redux/use-app-dispatch.hook'
import { useEffect }                            from 'react'
import { getOneCollection }                     from '../../../../redux/collections/actions/collections.actions'
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

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    if (!collectionId) {
        //TODO handle case no collection ID VBF-59
        console.error('no collection ID provided')
    }


    //Attempt to retrieve collection from redux store
    const collection = useAppSelector(state => state.collections.collections[collectionId])

    //ComponentDidMount
    useEffect(() => {

        if (!collection) {
            //Function to make a GET request to retrieve the collection from the backend
            const retrieveCollection = async () => {

                //Dispatch action to retrieve the collection
                await dispatch(getOneCollection(collectionId))
            }

            //Execute function to retrieve collection
            retrieveCollection()

            //TODO need to handle failed request here possibly too - what to do if retrieveCollection fails VBF-59

        }

    }, [])

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
        
                        <div className={styles.collectionButtons} >
                            <ButtonComponent textRef='collection-details_nav_play' primary onClick={() => navigate('/user/collection/play' + `?collectionId=${collectionId}`)} />
                            <ButtonComponent textRef='collection-details_nav_edit' secondary onClick={() => navigate('/user/collection/edit' + `?collectionId=${collectionId}`)} />
                        </div>
        
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