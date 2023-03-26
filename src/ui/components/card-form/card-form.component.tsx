import classNames                       from 'classnames'
import { useRef }                       from 'react'
import { useForm }                      from 'react-hook-form'
import { useNavigate }                  from 'react-router-dom'
import { createCard, updateOneCard }    from '../../../redux/actions/collections.actions'
import { CardType }                     from '../../../redux/types/collections/collection.types'
import { UpdateCardRequestType }        from '../../../redux/types/collections/collection.request.types'
import useAppDispatch                   from '../../hooks/redux/use-app-dispatch.hook'
import ButtonComponent                  from '../button/button.component'
import TextComponent                    from '../text/text.component'
import styles                           from './card-form.component.scss'

/** CardFormComponentProps */
type CardFormComponentProps = {

    /** Collection ID */
    collectionId: string

    /** Current card data */
    card?: CardType,

    /** Whether to show back to collection button */
    showBackToCollectionBtn?: boolean

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

    const { card, collectionId, showBackToCollectionBtn } = props    //Destructure props

    //Reference to form component
    const editFormRef = useRef<HTMLFormElement>(null)

    const dispatch = useAppDispatch()   //Configure useAppDispatch
    const navigate = useNavigate()      //Configure useNavigate

    //configure useForm
    const { register, handleSubmit }    = useForm({
        defaultValues: {
            lexi: card ? card.lexi : '',
            textPrompt: card ? card.textPrompt : '',
            id: card && card.id ? card.id : null
        }
    })

    //Function to navigate to collection
    const navigateToCollection = () => navigate(`/user/collection?collectionId=${collectionId}`)

    //Function to handle submit
    const onSubmit = async (data: UpdateCardRequestType) => {

        const { lexi, textPrompt, id } = data  //Destructure form data

        //If card has ID is update request to existing
        if (id) {

            //Dispatch new card data and wait for response
            await dispatch(updateOneCard({collectionId, lexi, textPrompt, id}))

            //Navigate back to collection
            navigateToCollection()


        }

        //No ID provided so create a new card
        else {

            //Dispatch new card data and wait for response
            await dispatch(createCard({collectionId, lexi, textPrompt}))

            //Navigate back to collection
            navigateToCollection()

        }
    }

    return (
        <form className={styles.cardEdit} ref={editFormRef} onSubmit={handleSubmit(onSubmit)} >

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

                    <label htmlFor='textPrompt'>
                        <TextComponent textRef='collection-editor_prompt_tag' />
                    </label>

                    <input 
                        {...register('textPrompt')}
                        name='textPrompt'
                        required
                    />

                </div>

            <div className={classNames(styles.section, styles.buttonSection)}>
                { showBackToCollectionBtn && <ButtonComponent icon='rotate-left' onClick={navigateToCollection} style={styles.cardEditBtn} textRef='card-form_back-to-collection' secondary /> }
                <ButtonComponent icon='floppy-disk' onClick={editFormRef.current?.submit} style={styles.cardEditBtn} textRef='common_save_tag' primary />
            </div>

        </form>
    )

}

export default CardFormComponent