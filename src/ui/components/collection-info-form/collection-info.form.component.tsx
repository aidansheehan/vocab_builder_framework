import classNames                                                       from 'classnames'
import { useRef }                                                       from 'react'
import { useForm }                                                      from 'react-hook-form'
import { useNavigate }                                                  from 'react-router-dom'
import { createCollection, deleteOneCollection, updateCollection}       from '../../../redux/actions/collections.actions'
import { CreateCollectionRequestType, UpdateCollectionRequestType }     from '../../../redux/types/collections/collection.request.types'
import useAppDispatch                                                   from '../../hooks/redux/use-app-dispatch.hook'
import useAppSelector                                                   from '../../hooks/redux/use-app-selector.hook'
import ButtonComponent                                                  from '../button/button.component'
import TextComponent                                                    from '../text/text.component'
import styles                                                           from './collection-info-form.component.scss'

/** CollectionInfoFormComponentProps */
type CollectionInfoFormComponentProps = {

    /** CollectionId */
    collectionId?: string,

    /** OnExit function to execute when user exits */
    handleExit?: () => void,

    /** Additional styles to be applied */
    style?: string,

    /** Additional button section styles to be applied */
    buttonSectionStyle?: string
    
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

    const { collectionId, handleExit, style, buttonSectionStyle } = props    //Destructure props

    //Get users collection
    const collection = collectionId ? useAppSelector(state => state.collections.collections[collectionId]) : null

    //Destructure collection
    const { title, description } = collection ? collection : { title: '', description: '' }

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
    const onSubmitCb = async (data: CreateCollectionRequestType | UpdateCollectionRequestType) => {

        const { title: newTitle, description: newDescription } = data

        //If no collection id (ie is a request to create a new collection)
        if (!collectionId) {

            //Dispatch new collection data and wait for destructured response
            const { payload }   = await dispatch(createCollection({title: newTitle, description: newDescription}))

            //Request was successful
            if (payload.status === 'success') {
                
                const { data }                  = payload   //Destructure payload
                const { _id: newCollectionId }  = data      //Destructure data to get new collectionId

                //Navigate to collection details page
                navigate(`/user/collection?collectionId=${newCollectionId}`)
            }

            //Request was not successful
            else {
                //TBD
            }

        }

        //Collection ID request is to update existing collection
        else {

            //Dispatch updated collection data
            await dispatch(updateCollection({title: newTitle, description: newDescription, collectionId}))

            //Navigate to collection details page
            navigate(`/user/collection?collectionId=${collectionId}`)
        }
    }

    //Function to handle delete collection
    const handleDelete = () => {

        //Send request to delete the collection
        dispatch(deleteOneCollection(collectionId))

        //Navigate to users home page
        navigate('/user')
    }

    //Component className
    const className = classNames(styles.collectionInfoForm, style)

    //Button section component className
    const buttonSectionClassName = classNames(styles.collectionInfoFormSection, styles.collectionInfoFormButtonSection, buttonSectionStyle)

    return (
        <form className={className} ref={collectionFormRef} onSubmit={handleSubmit(onSubmitCb)} >

            <div className={styles.collectionInfoFormSection} >
                <label htmlFor='title'>
                    <TextComponent textRef='create-collection_title-input' />
                </label>
                <input 
                    name='title' 
                    {...register('title')}
                    required
                />
            </div>

            <div className={styles.collectionInfoFormSection} >
                <label htmlFor='description'>
                    <TextComponent textRef='create-collection_description-input' />
                </label>
                <textarea 
                    name='description' 
                    {...register('description')}
                    required
                />
            </div>

            <div className={buttonSectionClassName} >
                {
                    collectionId
                    ?
                    <ButtonComponent icon='trash' textRef='collection-editor_delete-collection' warning onClick={handleDelete} type='button' />
                    :
                    handleExit && <ButtonComponent icon='rotate-left' textRef='common_back_tag' secondary onClick={() => handleExit()} type='button'/>
                }
                <ButtonComponent primary onClick={collectionFormRef.current?.submit} icon='floppy-disk' textRef='common_save_tag' />
            </div>
            
        </form>
    )

}

export default CollectionInfoFormComponent