import { useRef }                       from 'react'
import { useForm }                      from 'react-hook-form'
import { useNavigate }                  from 'react-router-dom'
import { createCard, updateOneCard }    from '../../../redux/collections/actions/collections.actions'
import { CardType }                     from '../../../redux/collections/types/collections.types'
import { UpdateCardRequestType }        from '../../../redux/collections/types/request.types'
import useAppDispatch                   from '../../hooks/redux/use-app-dispatch.hook'
import ButtonComponent                  from '../button/button.component'
import TextComponent                    from '../text/text.component'
import styles                           from './card-form.component.scss'

/** CardFormComponentProps */
type CardFormComponentProps = {

    /** Current card data */
    card?: CardType,

    /** Collection ID */
    collectionId: string

}

/**
 * Form component to create a new / update an existing specific card in a collection
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example (
 * <CardFormComponent />
 * )
 */
const CardFormComponent = (props: CardFormComponentProps): JSX.Element => {

    const { card, collectionId } = props    //Destructure props

    //Reference to form component
    const editFormRef = useRef<HTMLFormElement>(null)

    const dispatch = useAppDispatch()   //Configure useAppDispatch
    const navigate = useNavigate()      //Configure useNavigate

    //configure useForm
    const { register, handleSubmit }    = useForm({
        defaultValues: {
            lexi: card ? card.lexi : '',
            description: card ? card.description : '',
            id: card && card.id ? card.id : null
        }
    })

    //Function to navigate to collection
    const navigateToCollection = () => navigate(`/user/collection?collectionId=${collectionId}`)

    //Function to handle submit
    const onSubmit = async (data: UpdateCardRequestType) => {

        const { lexi, description, id } = data  //Destructure form data


        //If card has ID is update request to existing
        if (id) {

            //Dispatch new card data and wait for response
            await dispatch(updateOneCard({collectionId, lexi, description, id}))

            //Navigate back to collection
            navigateToCollection()


        }

        //No ID provided so create a new card
        else {

            //Dispatch new card data and wait for response
            await dispatch(createCard({collectionId, lexi, description}))

            //Navigate back to collection
            navigateToCollection()

        }
    }

    return (
        <form className={styles.cardEdit} ref={editFormRef} onSubmit={handleSubmit(onSubmit)} >

            <div className={styles.cardEditData}>

                <div className={styles.section} >

                    <label htmlFor='lexi'>
                        <TextComponent textRef='collection-editor_lexi_tag' />
                    </label>
                    
                    <input 
                        {...register('lexi')}
                        name='lexi'
                        required
                    />
                </div>

                <div className={styles.section} >

                    <label htmlFor='description'>
                        <TextComponent textRef='collection-editor_prompt_tag' />
                    </label>

                    <input 
                        {...register('description')}
                        name='description'
                        required
                    />

                </div>

            </div>

            <div className={styles.buttonSection}>
                <ButtonComponent icon='rotate-left' onClick={navigateToCollection} style={styles.cardEditBtn} textRef='common_back_tag' />
                <ButtonComponent icon='floppy-disk' onClick={editFormRef.current?.submit} style={styles.cardEditBtn} textRef='common_save_tag' />
            </div>

        </form>
    )

}

export default CardFormComponent