import classNames from 'classnames'
import { ChangeEvent, useState }            from 'react'
import ButtonComponent                      from '../../../../../../button/button.component'
import TextComponent from '../../../../../../text/text.component'
import { CollectionPageCardComponentProps } from '../../types/collection.page.card.component.props'
import styles                               from './collection.page.card-edit.component.scss'

/** CollectionPageCardEditComponentProps type */
type CollectionPageCardEditComponentProps = CollectionPageCardComponentProps & {
    
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

    const { card, closeHandler }                                      = props     //Destructure props
    const { lexi: originalLexi, description: originalDescription }  = card      //Destructure card

    const [ lexi, setLexi ]                 = useState<string>(originalLexi)            //New lexi state
    const [ description, setDescription ]   = useState<string>(originalDescription)     //New description state

    //Function to handle lexi change
    const onLexiChange = (e_: ChangeEvent<HTMLInputElement>) => {

        const { value } = e_.target //Destructure event target

        //Update lexi state
        setLexi(value)

    }

    //Function to handle description change
    const onDescriptionChange = (e_: ChangeEvent<HTMLInputElement>) => {

        const { value } = e_.target     //Destructure event target

        //Update description state
        setDescription(value)
    }

    //TODO investigate if we should use react-hook-forms 'handleSubmit' - does it sanitise input?
    //Function to handle submit
    const onSubmit = () => {

        //TODO this will be after an await 
        closeHandler()
    }

    return (
        <div className={styles.cardEdit}>
            <div className={classNames(styles.lexiSection, styles.section)} >
                <TextComponent textRef='collection-editor_lexi_tag' />
                <input value={lexi} onChange={onLexiChange} />
            </div>

            <div className={classNames(styles.descriptionSection, styles.section)} >
                <TextComponent textRef='collection-editor_prompt_tag' />
                <input value={description} onChange={onDescriptionChange} />
            </div>
            <ButtonComponent icon='floppy-disk' onClick={onSubmit} style={styles.saveBtn} textRef='common_save_tag'/>
        </div>
    )
}

export default CollectionPageCardEditComponent