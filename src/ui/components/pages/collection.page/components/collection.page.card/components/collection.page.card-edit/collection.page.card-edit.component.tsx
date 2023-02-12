import { useRef }                           from 'react'
import { CardType }                         from '../../../../../../../../redux/collections/types/collections.types'
import { UpdateCardRequestType }            from '../../../../../../../../redux/collections/types/request.types'
import useAppDispatch                       from '../../../../../../../hooks/redux/use-app-dispatch.hook'
import ButtonComponent                      from '../../../../../../button/button.component'
import TextComponent                        from '../../../../../../text/text.component'
import { useForm }                          from 'react-hook-form'
import { createCard, updateOneCard }        from '../../../../../../../../redux/collections/actions/collections.actions'
import styles                               from './collection.page.card-edit.component.scss'

/** CollectionPageCardEditComponentProps type */
type CollectionPageCardEditComponentProps = {

    //Card to be edited
    card?: CardType,

    /** Collection ID */
    collectionId: string,
    
    //Function to stop editing and return to normal display
    closeHandler: () => void
}

/**
 * Component to edit a single card collection data
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * let card = { lexi: "Billi", description: "Cat", id: "1" }
 * let closeHandler = () => alert('close handler called');
 * return (
 *   <CollectionPageCardEditComponent card={card} />
 * )
 */
const CollectionPageCardEditComponent = (props: CollectionPageCardEditComponentProps): JSX.Element => {

    const { card, collectionId, closeHandler }                                        = props     //Destructure props

    //Refernce to form component
    const editFormRef = useRef<HTMLFormElement>(null)

    const dispatch                      = useAppDispatch()  //Configure useAppDispatch

    //Configure useForm
    const { register, handleSubmit }    = useForm({
        defaultValues: {
            lexi: card ? card.lexi : '',
            description: card ? card.description : '',
            id: card && card.id ? card.id : null
        }
    })


    //Function to handle submit
    //TODO will need data: UpdateCardRequestType | CreateCardRequestType
    const onSubmit = async (data: UpdateCardRequestType) => {

        console.log('data: ', data)

        const { lexi, description, id } = data  //Destructure form data

        //If card has ID is update request to update existing
        if (id) {

            //Dispatch new card data and wait for response
            await dispatch(updateOneCard({collectionId, lexi, description, id}))

            //Close card editor
            closeHandler()
        }

        //No ID provided so create a new card
        else {
            
            //Dispatch new card data and wait for response
            await dispatch(createCard({collectionId, lexi, description}))

            //Close card editor
            closeHandler()
        }


    }

    return (
        <form className={styles.cardEdit} ref={editFormRef} onSubmit={handleSubmit(onSubmit)} >

            <div className={styles.cardEditData}>
                <div className={styles.section} >
                    <TextComponent textRef='collection-editor_lexi_tag' />
                    <input 
                        {...register('lexi')}
                        required
                    />
                </div>

                <div className={styles.section} >
                    <TextComponent textRef='collection-editor_prompt_tag' />
                    <input 
                        {...register('description')}
                        required
                    />
                </div>
            </div>

            <div className={styles.buttonSection}>
                <ButtonComponent icon='rotate-left' onClick={closeHandler} style={styles.cardEditBtn} textRef='common_back_tag' />
                <ButtonComponent icon='floppy-disk' onClick={editFormRef.current?.submit} style={styles.cardEditBtn} textRef='common_save_tag' />
            </div>

        </form>
    )

}

export default CollectionPageCardEditComponent