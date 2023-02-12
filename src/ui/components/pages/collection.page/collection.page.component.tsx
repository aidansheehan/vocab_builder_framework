import TextValueComponent                       from '../../text-value/text-value.component'
import useAppSelector                           from '../../../hooks/redux/use-app-selector.hook'
import { useNavigate }                          from 'react-router-dom'
import ButtonComponent                          from '../../button/button.component'
import styles                                   from './collection.page.component.scss'
import { useEffect, useState }                  from 'react'
import CollectionPageCardEditComponent          from './components/collection.page.card/components/collection.page.card-edit/collection.page.card-edit.component'
import CollectionPageCardDisplayComponent       from './components/collection.page.card/components/collection.page.card-display/collection.page.card-display.component'
import classNames                               from 'classnames'
import CollectionInfoFormComponent              from '../../collection-info-form/collection-info.form.component'

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

    const [ activeID, setActiveID ]                     = useState<string>(null)        //Whether actively editing card
    const [ inputNewCard, setInputNewCard ]             = useState<boolean>(false)      //Whether inputting new card
    const [ editCollectionInfo, setEditCollectionInfo ] = useState<boolean>(false)      //Whether editing collection info

    const navigate = useNavigate()

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

    //Monitor for whether user adding a new card
    useEffect(() => {

        //Stop editing any other card if new card being input
        if (inputNewCard) setActiveID(null)

    }, [ inputNewCard ])

    //Monitor for whether user editing existing card
    useEffect(() => {

        //Stop creating new card if existing card being edited
        if (activeID) setInputNewCard(false)
        
    }, [activeID])

    const newCardInputSectionClassName = classNames(styles.collectionPageSection, {
        [styles.collectionPageSectionActive]: inputNewCard
    })

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
                                        <ButtonComponent warning onClick={() => alert('DELETE TBD')} icon='trash' textRef='collection-editor_delete-collection'  />
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

                            //Component className
                            const sectionClassName = classNames(styles.collectionPageSection, {
                                [styles.collectionPageSectionActive]: id === activeID
                            })

                            return (
                                <div className={sectionClassName} key={id} >
                                    {
                                        id === activeID
                                        ?
                                        <CollectionPageCardEditComponent collectionId={collectionId} card={c_} closeHandler={() => setActiveID(null)}  />
                                        :
                                        <CollectionPageCardDisplayComponent collectionId={collectionId} card={c_} editHandler={() => setActiveID(id)} />
                                    }
                                </div>
                            )
                        })
                    }

                    {/* New Card Input */}
                    <div className={newCardInputSectionClassName} >
                        {
                            inputNewCard
                            ?
                            <CollectionPageCardEditComponent collectionId={collectionId} closeHandler={() => setInputNewCard(false)} />
                            :
                            <ButtonComponent onClick={() => setInputNewCard(true)} textRef='collection-editor_new-word' style={styles.newCardBtn} />
                        }
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