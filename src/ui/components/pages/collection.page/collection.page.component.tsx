import TextValueComponent                       from '../../text-value/text-value.component'
import useAppSelector                           from '../../../hooks/redux/use-app-selector.hook'
import { useLocation, useNavigate }             from 'react-router-dom'
import ButtonComponent                          from '../../button/button.component'
import styles                                   from './collection.page.component.scss'
import { useState }                             from 'react'
import CollectionPageCardDisplayComponent       from './components/collection.page.card-display/collection.page.card-display.component'
import CollectionInfoFormComponent              from '../../collection-info-form/collection-info.form.component'
import useAppDispatch                           from '../../../hooks/redux/use-app-dispatch.hook'
import { deleteOneCollection }                  from '../../../../redux/collections/actions/collections.actions'

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

    const [ editCollectionInfo, setEditCollectionInfo ] = useState<boolean>(false)  //Whether editing collection info TODO remove and use routes

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useAppDispatch()

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

    //Function to handle delete collection
    const handleDelete = async () => {

        //Wait to delete the collection
        await dispatch(deleteOneCollection(collectionId))

        //Navigate to users home page
        navigate('/user')
    }


    return (
        <>
            {
                collection
                ?
                <div className={styles.collectionDetails}>

                    <div className={styles.topPanel}>
        
                        <div className={styles.collectionInfo} >

                            <div className={styles.collectionInfoDetails}>
                                {
                                    editCollectionInfo
                                    ?
                                    <CollectionInfoFormComponent 
                                        title={collection.title} 
                                        description={collection.description} 
                                        collectionId={collectionId} 
                                        style={styles.collectionPageInfoForm} 
                                        buttonSectionStyle={styles.collectionPageInfoFormButtons} 
                                        afterSubmit={() => setEditCollectionInfo(false)}
                                    />
                                    :
                                    <>
                                        <div className={styles.title} >
                                            <TextValueComponent value={collection.title} />
                                        </div>
            
                                        <div className={styles.description}>
                                            <TextValueComponent value={collection.description} />
                                        </div>
                                    </>

                                }
                            </div>

                            <div className={styles.collectionInfoButtons}>
                                {
                                    editCollectionInfo
                                    ?
                                    <>
                                        <ButtonComponent warning onClick={handleDelete} icon='trash' textRef='collection-editor_delete-collection'  />
                                        <ButtonComponent secondary icon='rotate-left' onClick={() => setEditCollectionInfo(false)} />
                                    </>
                                    :
                                    <>
                                        <ButtonComponent textRef='collection-details_nav_play' primary onClick={() => navigate('/user/collection/play' + `?collectionId=${collectionId}`)} />
                                        <ButtonComponent secondary icon='pen-to-square' onClick={() => setEditCollectionInfo(true)} />
                                    </>
                                }
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