import classNames from 'classnames'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { createCollection/*, updateCollection*/ } from '../../../redux/collections/actions/collections.actions'
import { UpdateCollectionRequestType } from '../../../redux/collections/types/request.types'
import useAppDispatch from '../../hooks/redux/use-app-dispatch.hook'
import ButtonComponent from '../button/button.component'
import TextComponent from '../text/text.component'
import styles from './collection-info-form.component.scss'

/** CollectionInfoFormComponentProps */
type CollectionInfoFormComponentProps = {

    /** Title of the collection */
    title?: string,

    /** Collection description */
    description?: string,

    /** CollectionId */
    collectionId?: string
}

/**
 * Form component to create a new / update an existing collection
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * const title = 'Animals'
 * const description = 'A collection about animals.'
 * return (
 *   <CollectionInfoFormComponent title={title} description) />
 * )
 */
const CollectionInfoFormComponent = (props: CollectionInfoFormComponentProps): JSX.Element => {

    const { title, description, collectionId } = props    //Destructure props

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //Configure useForm
    const { register, handleSubmit } = useForm({
        defaultValues: {
            title: title,
            description: description
        }
    })

    //Reference to form component
    const collectionFormRef = useRef<HTMLFormElement>(null)

    //Function to handle submit
    //TODO this will be UpdateCollectionRequestType | CreateCollectionRequestType
    const onSubmit = async (data: UpdateCollectionRequestType) => {

        const { title: newTitle, description: newDescription } = data

        //If no collection id (ie is a request to create a new collection)
        if (!collectionId) {

            //Dispatch new collection data and wait for destructured response
            const { payload }   = await dispatch(createCollection({title: newTitle, description: newDescription}))
            console.log('yo payload: ', payload)
            //Request was successful
            if (payload.status === 'success') {

                console.log('hi!')
                
                const { data }                  = payload
                const { collection }            = data          //Destructure payload data
                const { _id: newCollectionId }  = collection    //Get new collectionId

                //Navigate to collection details page
                navigate(`/user/collection?collectionId=${newCollectionId}`)
            }

            //Request was not successful
            else {
                //TBD
            }
            // console.log('RESPONSE: ', response)

            //Navigate to new collection ID to add cards
            // navigate(`/user/`)
        }
    }

    return (
        <form className={styles.collectionInfoForm} ref={collectionFormRef} onSubmit={handleSubmit(onSubmit)} >
            {/* <span>TITLE: {title}</span>
            <span>DESCRIPTION: {description}</span> */}
            <div className={styles.collectionInfoFormSection} >
                <label htmlFor='title'>
                    <TextComponent textRef='create-collection_title-input' />
                </label>
                <input 
                    name='title' 
                    {...register('title')}
                />
            </div>

            <div className={styles.collectionInfoFormSection} >
                <label htmlFor='description'>
                    <TextComponent textRef='create-collection_description-input' />
                </label>
                <textarea 
                    name='description' 
                    {...register('description')}
                />
            </div>

            <div className={classNames(styles.collectionInfoFormSection, styles.collectionInfoFormButtonSection)} >
                <ButtonComponent icon='rotate-left' textRef='common_back_tag' secondary onClick={() => alert('i got clicked')}/>
                <ButtonComponent primary onClick={collectionFormRef.current?.submit} icon='floppy-disk' textRef='common_save_tag' />
            </div>
        </form>
    )

}

export default CollectionInfoFormComponent