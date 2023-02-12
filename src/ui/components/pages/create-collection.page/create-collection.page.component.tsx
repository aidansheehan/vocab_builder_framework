import { useNavigate }              from 'react-router-dom'
import CollectionInfoFormComponent  from '../../collection-info-form/collection-info.form.component'
import TextComponent                from '../../text/text.component'
import styles                       from './create-collection.page.component.scss'

/**
 * Page to create a new collection
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 *   <NewCollectionPage />
 * )
 */
const CreateCollectionPageComponent = (): JSX.Element => {

    const navigate = useNavigate()

    return (
        <div className={styles.createCollectionPage} >
        
            <div className={styles.createCollectionPageTitle} >
                <TextComponent textRef='create-collection_title' />
            </div>

            <CollectionInfoFormComponent handleExit={() => navigate('/user')} />
        </div>
    )
}

export default CreateCollectionPageComponent