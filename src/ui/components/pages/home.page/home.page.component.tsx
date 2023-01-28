import classNames               from 'classnames'
import { useEffect }            from 'react'
import { FormattedMessage }     from 'react-intl'
import { useNavigate }          from 'react-router-dom'
import { getCollections }       from '../../../../redux/collections/actions/collections.actions'
import useAppDispatch           from '../../../hooks/redux/use-app-dispatch.hook'
import useAppSelector           from '../../../hooks/redux/use-app-selector.hook'
import ButtonPrimaryComponent   from '../../button/components/button-primary.component'
import CollectionCardComponent  from '../../collection-card/collection-card.component'
import styles                   from './home.page.component.scss'

/**
 * User Home Page Component
 * @author Aidan Sheehan <aidanmsheehan@gmail.com>
 * @version 0.1.0
 * @component
 * @example
 * return (
 *   <HomePageComponent />
 * )
 */
const HomePageComponent = (): JSX.Element => {

    const { userInfo }      = useAppSelector((state) => state.user)         //Get user info
    const { collections }   = useAppSelector(state => state.collections)    //Get user's collections

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    //componentDidMount
    useEffect(() => {

        //Get user's collections
        dispatch(getCollections())

    }, [])

    return (
        <div className={styles.homePage} >

            <div className={classNames(styles.control, styles.homePageSection)}>

                <div className={styles.welcomeBanner}>
                    {/* TODO refactor to use generic text component - think about how to implement placeholdre */}
                    <FormattedMessage 
                        id={'home_greeting'}
                        values={{
                            name: userInfo?.username
                        }}
                    />
                </div>

                <div className={styles.controlButtons}>
                    <ButtonPrimaryComponent textRef='home_play-random' style={styles.playRandomBtn} onClick={() => alert('play random TBD')} />
                    <ButtonPrimaryComponent textRef='nav_new-collection_link' onClick={() => navigate('new')} />
                </div>
            </div>

            <div className={classNames(styles.searchContainer, styles.homePageSection)} >
                <input className={styles.searchInput} />
            </div>

            <div className={classNames(styles.collectionGrid, styles.homePageSection)} >
                {
                    Object.keys(collections).map((id_: string) => {
                        
                        const collection = collections[id_]

                        return (
                            <CollectionCardComponent 
                                id={id_}
                                title={collection.title}
                                description={collection.description}
                                key={id_}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default HomePageComponent