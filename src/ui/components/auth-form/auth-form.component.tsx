
import classNames                               from 'classnames'
import { useRef }                               from 'react'
import { FieldValues, SubmitHandler, useForm }  from 'react-hook-form'
import { useIntl }                              from 'react-intl'
import { NavLink }                              from 'react-router-dom'
import ButtonPrimaryComponent                   from '../button/components/button-primary.component'
import TextComponent                            from '../text/text.component'
import styles                                   from './auth-form.component.scss'
import { AuthFormButtonConfig }                 from './types/auth-form.button-config.type'
import { AuthFormRequestData }                  from './types/auth-form.request-data.type'

type AuthFormComponentProps = {

    /** On Form Submit */
    onSubmit: SubmitHandler<FieldValues>,

    submitBtnTextReference: string,

    /** Text Reference for AuthForm titlte */
    titleReference: string,

    /** Data to request */
    requestData: AuthFormRequestData[],

    //Whether data loading
    loading: boolean,

    buttons: AuthFormButtonConfig[]

    //TODO need to fix comes from redux store
    error: any,

    //Whether to offer continue without account option
    continueWithoutAccount?: boolean

}

/**
 * Generic styled authorization form component for login, register etc
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <AuthFormComponent />
 * )
 */
const AuthFormComponent = (props: AuthFormComponentProps): JSX.Element => {

    //Destructure props
    const { onSubmit, submitBtnTextReference, titleReference, requestData , buttons, loading, error, continueWithoutAccount } = props

    const { register, handleSubmit } = useForm()

    //Translate placeholder
    const intl = useIntl()

    //Form reference
    const formRef = useRef<HTMLFormElement>(null)

    return (

        <div className={styles.auth} >

            <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm} ref={formRef}>

                <>
                    <div className={classNames(styles.authHeader, styles.authSection)}>

                        <TextComponent textRef={titleReference} />

                    </div>

                    {error && <h1>ERROR TBD</h1>}

                    {requestData.map((d_, i_) => {

                        return (

                            <div className={styles.authSection} key={i_}>

                                    {/* TODO refactor as generic input component */}
                                {
                                    !!d_.register
                                    ?
                                    <input 
                                        type={d_.type}
                                        {...register(d_.register)}
                                        required={d_.required}
                                        autoComplete={d_.autoComplete}
                                        placeholder={intl.formatMessage({id: d_.placeholderReference})}
                                    />
                                    :
                                    <input 
                                        type={d_.type}
                                        required={d_.required}
                                        autoComplete={d_.autoComplete}
                                        placeholder={intl.formatMessage({id: d_.placeholderReference})}
                                    />
                                }
                                
                            </div>

                        )

                    })}

                    <div className={classNames(styles.authSection, styles.authButtonSection)} >

                        {
                            buttons && buttons.map((b_, i_) => (
                                <ButtonPrimaryComponent 
                                    onClick={b_.handleClick}
                                    disabled={loading}
                                    textRef={b_.textReference}
                                    style={styles.authBtnSecondary}
                                    type='button'
                                    key={i_}
                                />
                            )) 
                        }

                        <ButtonPrimaryComponent 
                            onClick={formRef.current?.submit}
                            disabled={loading}
                            textRef={submitBtnTextReference}
                        />

                    </div>

                    {
                        continueWithoutAccount
                        ?
                        <div className={classNames(styles.authSection)} >
                            <NavLink to='/new'>
                                <TextComponent textRef='nav_continue-without-account' />
                            </NavLink>
                        </div>
                        :
                        null

                    }

                </>

            </form>

        </div>

    )


}

export default AuthFormComponent