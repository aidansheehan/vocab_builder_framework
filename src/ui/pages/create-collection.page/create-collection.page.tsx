import { useNavigate }              from 'react-router-dom'
import CollectionInfoFormComponent  from '../../components/collection-info-form/collection-info.form.component'
import TextComponent                from '../../components/text/text.component'
import styles                       from './create-collection.page.scss'

/**
 * Page to create a new collection
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *   <NewCollectionPage />
 * )
 */
const CreateCollectionPage = (): JSX.Element => {

    const params        = new URLSearchParams(window.location.search)   //Get url search params
    const collectionId  = params.get('collectionId')                    //Get collection ID

    const navigate = useNavigate()

    return (
        <div className={styles.createCollectionPage} >
        
            <div className={styles.createCollectionPageTitle} >
                {
                    collectionId
                    ?
                    <TextComponent textRef='update-collection_title' />
                    :
                    <TextComponent textRef='create-collection_title' />
                }
            </div>

            {/* TODO we should only do handle exit if not a modal */}
            <CollectionInfoFormComponent handleExit={() => navigate('/user')} collectionId={collectionId} />
        </div> 
    )
}

export default CreateCollectionPage